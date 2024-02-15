import { type SchemaTypeDefinition } from "sanity";
import { navigationSchema } from "./schemas/documents/navigation";
import { profileSchema } from "./schemas/documents/profile";
import { projectSchema } from "./schemas/documents/project";
import { skillSchema } from "./schemas/documents/skill";
import { contactSubmissionSchema } from "./schemas/documents/submission";
import { linkSchema } from "./schemas/objects/link";
import { navigationItemSchema } from "./schemas/objects/navigation-item";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    skillSchema,
    navigationSchema,
    navigationItemSchema,
    linkSchema,
    profileSchema,
    contactSubmissionSchema,
  ],
};
