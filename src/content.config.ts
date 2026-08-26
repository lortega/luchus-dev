import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bitacora = defineCollection({
  loader: glob({ base: './src/content/bitacora', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { bitacora };
