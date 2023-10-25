import { z } from "zod";

export const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).min(3),
    description: z.string().optional().nullish(),
    duration: z.number().positive(),
    price: z.number().positive()
});

export const movieCreateSchema = movieSchema.omit({id: true});

export const movieReadSchema = movieSchema.array();

export const movieUpdateSchema = movieSchema.partial();