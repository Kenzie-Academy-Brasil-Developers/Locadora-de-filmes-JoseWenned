
import { Movie } from "../entities";
import { MoviesCreate } from "../interfaces/movies.interfaces";
import { moviesRepor } from "../repositories";

export const createMovieService = async (data: MoviesCreate) : Promise<Movie> => {
    
    const newMovies : Movie = await moviesRepor.save(data);
    
    return newMovies;

};

export const readMoviesService = async (page: any, perPage: any, sort: string | null, order: string | null): Promise<PaginationMovies> => {
    
    
    
};

export const updateMoviesService = async (movie: Movie, data: Partial<Movie>): Promise<Movie> => {

    return await moviesRepor.save({ ...movie, ...data })
    
};

export const deleteMoviesService = async (movie: Movie) => {

    await moviesRepor.remove(movie);

};

