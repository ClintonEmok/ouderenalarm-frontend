import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { topicType } from "./topicType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, topicType],
};
