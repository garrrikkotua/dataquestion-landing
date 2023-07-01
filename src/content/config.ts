import { defineCollection } from "astro:content";
import { blogSchema } from "./schemas";

const blog = defineCollection({
  schema: blogSchema,
});

export const collections = { blog };