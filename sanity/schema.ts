import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import certificate from './schemas/certificate'
import ctfBadge from './schemas/ctfBadge'
import featuredPost from './schemas/featuredPost'
import post from './schemas/post'
import tag from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, post, tag, category, featuredPost, certificate, ctfBadge],
}
