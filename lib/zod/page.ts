import { z } from 'zod';

const PageSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
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

export function validateAndCleanupPage(resource: any): Page | null {
  try {
    return PageSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Page = z.infer<typeof PageSchema>;
