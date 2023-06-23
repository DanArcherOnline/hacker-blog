import { CTFBadge, Certificate, FeaturedPost, Post } from "@/types/types";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { groq } from "next-sanity";
import { client } from "./lib/client";

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}
const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    ...,
    tags[]->,
    category->
}`
export async function getPosts(): Promise<Post[]> {
    return client.fetch(postsQuery)
}

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    tags[]->,
    category->
}`
export async function getPost(slug: string): Promise<Post> {
    return client.fetch(postQuery, { slug })
}

const featurePostQuery = groq`*[_type == "featuredPost"][0] {
    post->{
        ...,
        tags[]->,
        category->
    }
}`
export async function getFeaturedPost(): Promise<FeaturedPost> {
    return client.fetch(featurePostQuery)
}

const certificatesQuery = groq`*[_type == "certificate"]`
export async function getCertificates(): Promise<Certificate[]> {
    return client.fetch(certificatesQuery)
}

const ctfBadgesQuery = groq`*[_type == "ctfBadge"]{
    ...,
    post->{
        slug
    }
}`
export async function getCtfBadges(): Promise<CTFBadge[]> {
    return client.fetch(ctfBadgesQuery)
}