import { Repository } from "typeorm";
import { Movie } from "../entities";
import { Movies, MoviesCreate, MoviesUpdate } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";

export const createMovieService = async (data: MoviesCreate) : Promise<Movie> => {
    
    const moviesRepor : Repository<Movie> = AppDataSource.getRepository(Movie);

    const movies : Movie = moviesRepor.create(data);

    await moviesRepor.save(movies);
    
    return movies;
}

