import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Movie } from "./entities";

export const moviesRepor : Repository<Movie> = AppDataSource.getRepository(Movie);