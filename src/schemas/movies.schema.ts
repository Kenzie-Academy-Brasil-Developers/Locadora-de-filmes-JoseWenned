import { z } from "zod";

export const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).min(3),
    description: z.string().optional().nullish(),
    duration: z.number().min(0, {message: "Number must be greater than 0"}),
    price: z.number().min(0).int()
});

export const movieCreateSchema = movieSchema.omit({id: true});

export const movieReadSchema = z.array(movieSchema);

export const movieUpdateSchema = movieCreateSchema.partial();

export const movieAllReadSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: movieReadSchema,
});