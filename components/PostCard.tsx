import { Post } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from '../sanity/sanity-utils'
import BulbIcon from "./BulbIcon"
import { Category } from "./CategoryFilterButton"
import FlagIcon from "./FlagIcon"
import Tag from "./Tag"
import TutorialIcon from "./TutorialIcon"

interface Props {
    post: Post
}

export default function PostCard({ post }: Props) {
    const getCategoryIcon = () => {
        switch (post.category.title) {
            case Category.Tutorial:
                return (<TutorialIcon />)
            case Category.CTF:
                return (<FlagIcon />)
            case Category.General:
                return (<BulbIcon />)
        }
    }
    return (
        <Link className="block group hover:scale-[1.02] transform duration-300" href={`/post/${post.slug.current}`} >
            <div className="bg-card-grey hover:bg-[#29292b] rounded p-6 break-inside-avoid-column drop-shadow-lg">
                <div className="relative w-full h-52 mb-4 rounded-3xl overflow-clip">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt='feature image for blog post'
                        className="object-cover rounded-3xl drop-shadow-lg group-hover:scale-105 transform duration-300"
                        fill
                    />
                </div>
                <div className="flex gap-2 items-center mb-2">
                    <div className="w-6 h-6">
                        {getCategoryIcon()}
                    </div>
                    <h3 className="font-normal text-xl">{post.title}</h3>
                </div>
                <p className="font-normal text-base text-body-text-grey mb-4">
                    {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (<Tag key={i}>{tag.name}</Tag>))}
                </div>
            </div>
        </Link>

    )
}
