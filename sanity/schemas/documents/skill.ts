import { defineType } from 'sanity';

export const skillSchema = defineType({
  name: 'skill',
  type: 'document',
  title: 'Skill',
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
      options: {
        source: 'title',
      },
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
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
      name: 'progress',
      type: 'number',
      title: 'Progress',
      description: '0-100',
    },
  ],
});
