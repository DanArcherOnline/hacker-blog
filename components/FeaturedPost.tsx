import { urlFor } from "@/sanity/sanity-utils";
import { Post } from "@/types/types";
import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";

interface Props {
    post: Post
}

export default function FeaturedPost({ post }: Props) {
    return (
        <div className="@container relative drop-shadow-xl min-w-full rounded">
            <div className="w-full h-full fixed -z-10">
                <Image
                    src={urlFor(post.mainImage).url()}
                    alt="Featured Post Image"
                    fill
                    className="object-cover rounded"
                />
            </div>
            <div className="bg-black/60 p-4 @xl:p-8 rounded @xl:bg-transparent @xl:bg-gradient-to-r @xl:from-black/75 @xl:from-25% @xl:to-transparent @xl:pr-[40%]">
                <h1 className="font-black text-4xl mb-2">{post.title}</h1>
                <p className="text-md mb-8">{post.description}</p>
                <Button href={`/post/${post.slug.current}`}>Read Now</Button>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => <Tag outline key={i}>{tag.name}</Tag>)}
                </div>
            </div>
        </div>
    )
}
