import { z } from 'zod';
import { ProjectBaseSchema } from './project';

export const ProjectTeaserSchema = ProjectBaseSchema.extend({
  slug: z.object({
    current: z.string(),
  }),
});

export function validateAndCleanupProjectTeaser(resource: any): ProjectTeaser | null {
  try {
    return ProjectTeaserSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type ProjectTeaser = z.infer<typeof ProjectTeaserSchema>;
