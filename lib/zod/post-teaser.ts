import { z } from 'zod';
import { PostBaseSchema } from './post';

export const PostTeaserSchema = PostBaseSchema.extend({
  slug: z.object({
    current: z.string(),
  }),
});

export function validateAndCleanupPostTeaser(resource: any): PostTeaser | null {
  try {
    return PostTeaserSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type PostTeaser = z.infer<typeof PostTeaserSchema>;
