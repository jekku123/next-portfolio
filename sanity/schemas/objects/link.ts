import { defineType } from "sanity";

export const linkSchema = defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "external",
      type: "url",
      title: "URL",
      hidden: ({ parent, value }) => !value && !!parent?.internal,
    },
    // {
    //   name: 'internal',
    //   type: 'reference',
    //   to: [{ type: 'page' }],
    //   hidden: ({ parent, value }) => !value && !!parent?.external,
    // },
  ],
});
