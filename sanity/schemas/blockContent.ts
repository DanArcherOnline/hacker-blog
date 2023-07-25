import { defineArrayMember, defineType } from 'sanity'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ]
    }),
    defineArrayMember({
      title: 'Code',
      type: 'code',
      options: {
        languageAlternatives: [
            { title: 'HTTP', value: 'http', mode: 'http'},
            { title: 'Javascript', value: 'javascript' },
            { title: 'HTML', value: 'html' },
            { title: 'CSS', value: 'css' },
            { title: 'PHP', value: 'php' },
            { title: 'C#', value: 'csharp' },
            { title: 'Go', value: 'go' },
            { title: 'Java', value: 'java' },
            { title: 'Bash/Shell', value: 'sh' },
            { title: 'JSON', value: 'json' },
            { title: 'JSX', value: 'jsx' },
            { title: 'Markdown', value: 'markdown' },
            { title: 'Python', value: 'python' },
            { title: 'Ruby', value: 'ruby' },
            { title: 'SASS', value: 'sass' },
            { title: 'SCSS', value: 'scss' },
            { title: 'SQL', value: 'sql' },
            { title: 'TSX', value: 'tsx' },
            { title: 'Typescript', value: 'typescript' },
            { title: 'XML', value: 'xml-doc' },
            { title: 'YAML', value: 'yaml' },
        ],
        withFilename: true,
      },
    }),
  ],
})
