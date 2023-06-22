import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import tag from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, category, blockContent],
}
