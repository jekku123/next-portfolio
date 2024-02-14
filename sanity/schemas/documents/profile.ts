import { defineType } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      name: "fullName",
      type: "string",
      title: "Full Name",
      validation: (Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().error("Headline is required"),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Your profile picture",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
          validation: (Rule) => Rule.required().error("Alt is required"),
        },
      ],
    },
    {
      name: "shortBio",
      type: "text",
      title: "Short Bio",
    },
    {
      name: "fullBio",
      type: "array",
      title: "Full Bio",
      of: [{ type: "block" }],
    },

    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          name: "socialLink",
          type: "object",
          title: "Social Link",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "Url",
              type: "url",
            },
          ],
        },
      ],
      options: {
        layout: "tags",
      },
    },

    // {
    //   name: 'socialLinks',
    //   type: 'array',
    //   title: 'Social Links',
    //   of: [
    //     {
    //       name: 'socialLink',
    //       type: 'object',
    //       title: 'Social Link',
    //       fields: [
    //         {
    //           name: 'platform',
    //           type: 'string',
    //           title: 'Platform',
    //         },
    //         {
    //           name: 'url',
    //           type: 'url',
    //           title: 'URL',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});
