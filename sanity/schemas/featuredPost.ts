import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featuredPost',
    title: 'Featured Post',
    type: 'document',
    fields: [
        defineField({
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: { type: 'post' },
        })
    ],
    preview: {
        select: {
            title: 'title',
            post: 'post.title',
            media: 'mainImage',
        },
        prepare(selection) {
            const { post } = selection
            return { ...selection, title: 'Feature Post', subtitle: post }
        },
    },
})