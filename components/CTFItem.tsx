import { urlFor } from "@/sanity/sanity-utils"
import { CTFBadge } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import CTFProvidedIcon from "./CTFProvidedIcon"

interface Props {
    ctfBadge: CTFBadge
}

export default function CTFItem({ ctfBadge }: Props) {
    const ctfItemComponent =
        <div className="flex items-center gap-2">
            <div className="relative w-24 h-24">
                <Image
                    src={urlFor(ctfBadge.badge).url()}
                    alt={`Badge image for ${ctfBadge.platform}'s ${ctfBadge.name} CTF box`}
                    fill
                    className="object-contain"
                />
                {ctfBadge.post?.slug && <CTFProvidedIcon className="w-6 h-6 absolute bottom-2 right-2 drop-shadow-lg" />}
            </div>
            <div className="flex flex-col">
                <h1 className="font-black text-white text-lg">{ctfBadge.name}</h1>
                {ctfBadge.event && <h2 className="font-light text-white text-base">{ctfBadge.event}</h2>}
                <h3 className="font-light text-xs text-accent-pink">{ctfBadge.platform}</h3>
            </div>
        </div>
    if (ctfBadge.post?.slug) {
        return (
            <Link href={`/post/${ctfBadge.post.slug.current}`} className="flex flex-col py-4">
                {ctfItemComponent}
            </Link>
        )
    }
    return <div className="flex flex-col py-4">
        {ctfItemComponent}
    </div>
}
