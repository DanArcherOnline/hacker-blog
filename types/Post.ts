import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { PortableTextBlock } from "sanity"

export type Post = {
    _id: string
    _createdAt: Date
    title: string
    slug: Slug
    description: string
    mainImage: SanityImageSource
    tags: Tag[]
    category: Category
    publishedAt: Date
    body: PortableTextBlock[]
}

export type Category = {
    title: string
    description: string
}

export type Tag = {
    name: string
}

export type Slug = {
    _type: string
    current: string
}