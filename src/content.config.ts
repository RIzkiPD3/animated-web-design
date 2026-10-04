import { defineCollection, z } from 'astro:content';
import { photographs } from './data/photos';

const photos = defineCollection({
  loader: () => photographs,
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number().positive(),
      height: z.number().positive(),
      aspectRatio: z.enum(['3:2', '2:3', '4:5', '1:1', '16:9']),
    }),
    metadata: z.object({
      year: z.number().int(),
      location: z.string(),
      camera: z.string(),
      lens: z.string(),
      focalLength: z.string(),
      aperture: z.string(),
      shutterSpeed: z.string(),
      iso: z.number().int().positive(),
      medium: z.string(),
      series: z.string(),
      plateNumber: z.string(),
    }),
    editorial: z.object({
      description: z.string(),
      caption: z.string(),
      curatorialNotes: z.string().optional(),
    }),
    presentation: z.object({
      featured: z.boolean(),
      order: z.number().int(),
      orientation: z.enum(['horizontal', 'vertical', 'square', 'panoramic']),
    }),
  }),
});

export const collections = { photos };
