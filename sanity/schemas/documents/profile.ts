import { defineType } from 'sanity';

export const profileSchema = defineType({
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'In one short sentence, what do you do?',
      validation: (Rule) => Rule.required().error('Headline is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Your profile picture',
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
      name: 'shortBio',
      type: 'text',
      title: 'Short Bio',
    },
    {
      name: 'fullBio',
      type: 'array',
      title: 'Full Bio',
      of: [{ type: 'block' }],
    },

    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'object',
      title: 'Social Links',
      fields: [
        {
          name: 'github',
          type: 'url',
          title: 'GitHub',
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
        },
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
        },
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter',
        },
      ],
    },
  ],
});
