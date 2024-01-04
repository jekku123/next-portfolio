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
      name: 'level',
      type: 'number',
      title: 'Level',
      description: '1-10',
    },
  ],
});
