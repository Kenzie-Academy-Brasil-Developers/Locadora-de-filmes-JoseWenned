
import { Movie } from "../entities";
import { MoviesCreate } from "../interfaces/movies.interfaces";
import { PaginationParams } from "../interfaces/pagination.interfaces";
import { moviesRepor } from "../repositories";

export const createMovieService = async (data: MoviesCreate) : Promise<Movie> => {
    
    const newMovies : Movie = await moviesRepor.save(data);
    
    return newMovies;

};

export const readMoviesService = async ({page, perPage, prevPage, nextPage, order, sort}: PaginationParams): Promise<any> => {
    
    const [ movies, count ] = await moviesRepor.findAndCount({
        order: { [sort]: order },
        skip: page,
        take: perPage
    });

    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies,
    }
    
};

export const updateMoviesService = async (movie: Movie, data: Partial<Movie>): Promise<Movie> => {

    return await moviesRepor.save({ ...movie, ...data })
    
};

export const deleteMoviesService = async (movie: Movie) => {

    await moviesRepor.remove(movie);

};

