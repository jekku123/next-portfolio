import { z } from "zod";
import { PortableTextSchema } from "./body";
import { ImageSchema } from "./image";

const ProfileSchema = z.object({
  _id: z.string(),
  fullName: z.string(),
  headline: z.string(),
  image: ImageSchema,
  shortBio: z.string(),
  fullBio: PortableTextSchema,
  email: z.string(),
  location: z.string(),
});

export function validateAndCleanupProfile(resource: any): Profile | null {
  try {
    return ProfileSchema.parse(resource);
  } catch (error) {
    const { name = "ZodError", issues = [] } = error as {
      name?: string;
      issues?: any[];
    };
    console.log(JSON.stringify({ name, issues, resource }, null, 2));
    return null;
  }
}

export type Profile = z.infer<typeof ProfileSchema>;
