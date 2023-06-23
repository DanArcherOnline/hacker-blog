import PostPage from "@/components/PostPage";
import { getPost } from "@/sanity/sanity-utils";
import { notFound } from 'next/navigation';


interface Props {
    params: { slug: string }
}


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
