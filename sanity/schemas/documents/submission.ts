import { defineType } from 'sanity';

export const contactSubmissionSchema = defineType({
  name: 'submission',
  type: 'document',
  title: 'Submissions',
  readOnly: true,
  fields: [
    {
      name: 'receivedAt',
      type: 'datetime',
      title: 'Received At',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
  ],
});
