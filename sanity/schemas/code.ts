import { defineField } from "sanity";

//...fields,
defineField({
    type: 'code',
    name: 'myCodeField',
    title: 'Code with all options',
    options: {
        language: 'javascript',
        languageAlternatives: [
            { title: 'Javascript', value: 'javascript' },
            { title: 'HTML', value: 'html' },
            { title: 'CSS', value: 'css' },
            { title: 'PHP', value: 'php' },
        ],
        withFilename: true,
    },
})