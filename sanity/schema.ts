import { siteConfig } from '@/app/(admin)/studio/[[...index]]/schemas/siteConfig';
import { type SchemaTypeDefinition } from 'sanity';
import { navigationSchema } from './schemas/documents/navigation';
import { pageSchema } from './schemas/documents/page';
import { postSchema } from './schemas/documents/post';
import { projectSchema } from './schemas/documents/project';
import { skillSchema } from './schemas/documents/skill';
import { tagSchema } from './schemas/documents/tag';
import { linkSchema } from './schemas/objects/link';
import { navigationItemSchema } from './schemas/objects/navigation-item';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    skillSchema,
    pageSchema,
    navigationSchema,
    navigationItemSchema,
    linkSchema,
    siteConfig,
    postSchema,
    tagSchema,
  ],
};
