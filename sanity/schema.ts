import { type SchemaTypeDefinition } from 'sanity';
import { projectSchema } from './schemas/project';
import { skillSchema } from './schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, skillSchema],
};
