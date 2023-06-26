import PostPage from "@/components/PostPage";
import { client } from "@/sanity/lib/client";
import { getPost } from "@/sanity/sanity-utils";
import { Post } from "@/types/types";
import { groq } from "next-sanity";
import { notFound } from 'next/navigation';


interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    const query = groq`*[_type == "post"]{
        slug
    }`
    const posts: Post[] = await client.fetch(query)
    return posts.map((post) => { post.slug.current })

}

export const revalidate = 60

export default async function Post({ params }: Props) {
    const slug = params.slug
    const post = await getPost(slug)
    if (!post) {
        notFound()
    }

    return (
        <PostPage post={post} />
    )
}
