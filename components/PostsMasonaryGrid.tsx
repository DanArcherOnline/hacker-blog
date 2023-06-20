import PostCard from "./PostCard";

export default function PostsMasonaryGrid() {
    return (
        <div className="columns-2xs gap-2 space-y-2 lg:gap-4 lg:space-y-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}
