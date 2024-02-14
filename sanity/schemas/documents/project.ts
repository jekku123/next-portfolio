import { defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().error("Title is required"),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "This will be used to create the URL for this project",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      validation: (Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
            },
          ],
        },
      ],
    },
    {
      name: "github",
      type: "url",
      title: "GitHub",
    },
    {
      name: "liveSite",
      type: "url",
      title: "Live Site",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
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
      name: "carouselImages",
      type: "array",
      title: "Carousel Images",
      of: [
        {
          name: "carouselImage",
          type: "image",
          title: "Carousel Image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
              validation: (Rule) => Rule.required().error("Alt is required"),
            },
          ],
        },
      ],
    },
    {
      name: "techs",
      type: "array",
      title: "Technologies",
      of: [
        {
          name: "technology",
          type: "string",
          title: "Technology",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          name: "tag",
          type: "string",
          title: "Tag",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
});
