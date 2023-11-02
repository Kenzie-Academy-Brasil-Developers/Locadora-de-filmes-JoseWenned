import { DeepPartial, Repository } from "typeorm";
import { 
    movieCreateSchema,  
    movieSchema, 
} from "../schemas/movies.schema";
import { z } from "zod";
import { Movie } from "../entities";

export type MoviesCreate = z.infer<typeof movieCreateSchema>;
export type MoviesRead = Array<Movie>;
export type MoviesUpdate = DeepPartial<Movie>;

export type MoviesRepor = Repository<Movie>

