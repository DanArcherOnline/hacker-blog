import { Post } from "@/types/Post";
import PostCard from "./PostCard";

interface Props {
    posts: Post[]
}

export default function PostsMasonaryGrid({ posts }: Props) {
    return (

        <div className="columns-2xs gap-2 space-y-2 lg:gap-4 lg:space-y-4">
            {posts.map((post) => (<PostCard key={post._id} post={post} />))}
        </div>
    )
}
