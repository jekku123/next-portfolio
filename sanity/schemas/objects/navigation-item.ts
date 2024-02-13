import { NavigationIcon } from "lucide-react";
import { defineType } from "sanity";

export const navigationItemSchema = defineType({
  name: "navigationItem",
  type: "object",
  title: "Navigation Item",
  icon: NavigationIcon,
  fields: [
    {
      name: "text",
      type: "string",
      title: "Label",
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Href",
    },
  ],
});
