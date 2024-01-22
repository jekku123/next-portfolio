import { z } from 'zod';

export const SkillSchema = z.object({
  _id: z.string(),
  title: z.string(),
  logo: z
    .object({
      alt: z.string(),
      asset: z.object({
        _ref: z.string(),
        _type: z.string(),
      }),
    })
    .optional()
    .nullable(),
  progress: z.number(),
});

export function validateAndCleanupSkill(resource: any): Skill | null {
  try {
    return SkillSchema.parse(resource);
  } catch (error) {
    const { name = 'ZodError', issues = [] } = error as { name?: string; issues?: any[] };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Skill = z.infer<typeof SkillSchema>;
