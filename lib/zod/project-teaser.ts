import { z } from 'zod';
import { ProjectBaseSchema } from './project';

export const ProjectTeaserSchema = ProjectBaseSchema.extend({
  slug: z.string(),
});

export function validateAndCleanupProjectTeaser(project: any): ProjectTeaser | null {
  try {
    return ProjectTeaserSchema.parse(project);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, project }, null, 2));
    return null;
  }
}

export type ProjectTeaser = z.infer<typeof ProjectTeaserSchema>;
