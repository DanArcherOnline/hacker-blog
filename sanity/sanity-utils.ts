import { Post } from "@/types/Post";
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
    tags[]->
}`
export async function getPost(slug: string): Promise<Post> {
    return client.fetch(postQuery, { slug })
}
