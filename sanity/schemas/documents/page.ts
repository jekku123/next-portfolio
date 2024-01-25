import { defineType } from 'sanity';

export const pageSchema = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This will be used to create the URL for this page',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
          validation: (Rule) => Rule.required().error('Alt is required'),
        },
      ],
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    },
  ],
});
