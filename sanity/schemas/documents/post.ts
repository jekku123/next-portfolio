import { defineType } from 'sanity';

export const postSchema = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Title is required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This will be used to create the URL for this post',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (Rule) => Rule.max(200).error('Max 200 characters'),
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
            },
          ],
        },
      ],
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
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
  ],
});
