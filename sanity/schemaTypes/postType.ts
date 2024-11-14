import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().error("You have to set a title"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required().error("You have to set a slug"),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) =>
        rule.required().error("You have to set a publish date"),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      validation: (rule) =>
        rule.max(200).error("The excerpt must be less than 200 characters"),
    }),
    defineField({
      name: "featuredImage",
      type: "image",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ name: "caption", type: "string", title: "Caption" }],
        },
      ],
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topic" }] }],
    }),
  ],
});
