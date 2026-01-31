import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const en = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/en" }),
  schema: z.object({
    title: z.string(),
  }),
});

const fr = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/fr" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  en,
  fr,
};
