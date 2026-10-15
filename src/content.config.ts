import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/work',
    generateId: ({ entry }) => entry.replace(/^\d+-/, '').replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    category: z.string(),
    cover: z.string(),
    attribution: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
