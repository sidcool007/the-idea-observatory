import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(8).max(100),
    dek: z.string().min(20).max(220),
    category: z.enum([
      "Science & Discovery",
      "Technology & AI",
      "History & Civilisations",
      "Mind & Philosophy",
      "Business & Money",
      "World & Culture",
      "Travel & Places",
      "Life & Living"
    ]),
    author: z.string().default("The Idea Observatory Editorial Desk"),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    readingMinutes: z.number().int().positive().max(60).default(8),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "review", "approved", "published"]).default("draft"),
    sources: z.array(z.object({
      title: z.string(),
      publisher: z.string(),
      url: z.string().url()
    })).default([])
  })
});

export const collections = { articles };