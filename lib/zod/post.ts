import { z } from 'zod';

export const PostBaseSchema = z.object({
  _id: z.string(),
  _createdAt: z.string(),
  title: z.string(),
  excerpt: z.string().nullable().optional(),
  image: z.object({
    alt: z.string(),
    asset: z.object({
      _ref: z.string(),
      _type: z.string(),
    }),
  }),
  tags: z.array(
    z.object({
      title: z.string(),
    })
  ),
});

const PostSchema = PostBaseSchema.extend({
  body: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      children: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          marks: z.array(z.string()),
          text: z.string(),
        })
      ),
      markDefs: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          href: z.string(),
        })
      ),
      style: z.string(),
    })
  ),
});

export function validateAndCleanupPost(resource: any): Post | null {
  try {
    return PostSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Post = z.infer<typeof PostSchema>;
