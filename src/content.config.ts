
import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      benefits: z.array(z.string()),
      imageUrl: image()
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'services': servicesCollection,
};