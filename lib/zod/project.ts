import { z } from "zod";
import { ImageSchema } from "./image";
import { PortableTextSchema } from "./portable-text";

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
  techs: z.array(z.string()),
  tags: z.array(z.string()),
});

const ProjectSchema = ProjectBaseSchema.extend({
  github: z.string().nullable().optional(),
  liveSite: z.string().nullable().optional(),
  body: PortableTextSchema,
  carouselImages: z.array(ImageSchema),
});

export function validateAndCleanupProject(resource: any): Project | null {
  try {
    return ProjectSchema.parse(resource);
  } catch (error) {
    const { name = "ZodError", issues = [] } = error as {
      name?: string;
      issues?: any[];
    };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Project = z.infer<typeof ProjectSchema>;
