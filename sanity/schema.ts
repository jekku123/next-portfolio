import { type SchemaTypeDefinition } from "sanity";
import { navigationSchema } from "./schemas/documents/navigation";
import { pageSchema } from "./schemas/documents/page";
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
    pageSchema,
    navigationSchema,
    navigationItemSchema,
    linkSchema,
    profileSchema,
    contactSubmissionSchema,
  ],
};
