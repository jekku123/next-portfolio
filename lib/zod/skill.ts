import { z } from 'zod';

export const SkillSchema = z.object({
  _id: z.string(),
  title: z.string(),
  level: z.number(),
});

export function validateAndCleanupSkill(project: any): Skill | null {
  try {
    return SkillSchema.parse(project);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, project }, null, 2));
    return null;
  }
}

export type Skill = z.infer<typeof SkillSchema>;
