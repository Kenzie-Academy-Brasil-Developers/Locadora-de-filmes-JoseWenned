import { DeepPartial } from "typeorm";
import { 
    movieCreateSchema, 
    movieReadSchema, 
    movieSchema, 
} from "../schemas/movies.schema";
import { z } from "zod";
import { Movie } from "../entities";

export type Movies = z.infer<typeof movieSchema>;
export type MoviesCreate = z.infer<typeof movieCreateSchema>;
export type MoviesUpdate = DeepPartial<MoviesCreate>;
export type MoviesRead = z.infer<typeof movieReadSchema>;
export type MoviesAll = Array<Movie>

