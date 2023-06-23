import PostPage from "@/components/PostPage";
import { getPost } from "@/sanity/sanity-utils";


interface Props {
    params: { slug: string }
}


export default async function Post({ params }: Props) {
    const slug = params.slug
    const post = await getPost(slug)
    return (
        <PostPage post={post} />
    )
}
