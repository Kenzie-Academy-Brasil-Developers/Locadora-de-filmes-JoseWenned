import { movieCreateSchema, movieSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { z } from "zod";

export type Movies = z.infer<typeof movieSchema>;

export type MoviesCreate = z.infer<typeof movieCreateSchema>
export type MoviesUpdate = z.infer<typeof movieUpdateSchema>
