import { NavigationIcon } from 'lucide-react';
import { defineType } from 'sanity';

export const navigationSchema = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: NavigationIcon,
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
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{ type: 'navigationItem' }],
    },
  ],
});
