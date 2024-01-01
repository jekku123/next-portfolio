import { defineType } from 'sanity';

export const skillSchema = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
      description: '1-10',
    },
  ],
});
