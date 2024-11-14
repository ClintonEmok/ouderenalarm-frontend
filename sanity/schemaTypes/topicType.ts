import { defineType } from "sanity";

export const topicType = defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Topic Name",
      type: "string",
      validation: (rule) => rule.required().error("You have to set a name"),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required().error("You have to set a slug"),
    },
  ],
});
