import { defineType } from 'sanity';

export const linkSchema = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'isExternal',
      type: 'boolean',
      title: 'Content is from an external source',
    },
    {
      name: 'internalLink',
      type: 'reference',
      title: 'Internal Link',
      description: 'Select page for navigation',
      to: [
        { type: 'page' },
        // { type: 'project' }
      ],
      hidden: ({ parent, value }) => !value && parent?.isExternal,
    },
    {
      name: 'externalUrl',
      type: 'url',
      title: 'External URL',
      description: "Use fully qualified URL's for external link",
      hidden: ({ parent, value }) => !value && !parent?.isExternal,
    },
  ],
});
