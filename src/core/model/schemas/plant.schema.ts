import { z } from 'zod';
import { createListResponseSchema } from './list-response.schema';

export const PlantSchema = z.object({
    id: z.number(),
    common_name: z.string().optional().nullable(),
    scientific_name: z.array(z.string()).optional().nullable(),
    other_name: z.array(z.string()).optional().nullable(),
    family: z.string().optional().nullable(),
    origin: z.array(z.string()).optional().nullable(),
    type: z.string().optional().nullable(),
    sunlight: z.array(z.string()).optional().nullable(),
    flowers: z.boolean().optional().nullable(),
    indoor: z.boolean().optional().nullable(),
    default_image: z
        .object({
            original_url: z.string().optional(),
            regular_url: z.string().optional(),
            medium_url: z.string().optional(),
            small_url: z.string().optional(),
            thumbnail: z.string().optional(),
        })
        .nullable(),
});

export const PlantsSchema = createListResponseSchema(PlantSchema);
export type Plant = z.infer<typeof PlantSchema>;
export type PlantsResponse = z.infer<typeof PlantsSchema>;
