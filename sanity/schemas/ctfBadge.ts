import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ctfBadge',
    title: 'CTF Badge',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge Image',
            type: 'image',
        }),
        defineField({
            name: 'name',
            title: 'CTF Name',
            type: 'string',
        }),
        defineField({
            name: 'event',
            title: 'Event Name',
            type: 'string',
        }),
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
        }),
        defineField({
            name: 'post',
            title: 'Walkthrough Post',
            type: 'reference',
            to: { type: 'post' },
        }),
    ],

    preview: {
        select: {
            title: 'name',
            company: 'company',
            media: 'logo',
        },
        prepare(selection) {
            const { company } = selection
            return { ...selection, subtitle: company }
        },
    },
})
