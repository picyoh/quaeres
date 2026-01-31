import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const about = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number()
  }),
});

export const collections = {
  about,
};
