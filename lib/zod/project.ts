import { z } from 'zod';

export const ProjectBaseSchema = z.object({
  _id: z.string(),
  title: z.string(),
  excerpt: z.string().nullable().optional(),
  image: z.object({
    alt: z.string(),
    asset: z.object({
      _ref: z.string(),
      _type: z.string(),
    }),
  }),
  technologies: z.array(
    z.object({
      _id: z.string(),
      title: z.string(),
    })
  ),
  tags: z.array(z.string()),
});

const ProjectSchema = ProjectBaseSchema.extend({
  github: z.string().nullable().optional(),
  liveSite: z.string().nullable().optional(),
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

export function validateAndCleanupProject(resource: any): Project | null {
  try {
    return ProjectSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Project = z.infer<typeof ProjectSchema>;
