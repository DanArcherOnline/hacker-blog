import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'certificate',
    title: 'Certificate',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
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
