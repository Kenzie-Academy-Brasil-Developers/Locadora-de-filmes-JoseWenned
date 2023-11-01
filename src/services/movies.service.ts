
import { Movie } from "../entities";
import { Movies, MoviesCreate, MoviesUpdate } from "../interfaces/movies.interfaces";
import { PaginationMovies } from "../interfaces/pagination.interfaces";
import { moviesRepor } from "../repositories";

export const createMovieService = async (data: MoviesCreate) : Promise<Movie> => {
    
    const newMovies : Movie = await moviesRepor.save(data);
    
    return newMovies;

};

export const readMoviesService = async (page: any, perPage: any, sort: string | null, order: string | null): Promise<PaginationMovies> => {
    
    let movies: [Movie[], number];
    let orderObj = {};

    let prevPage: string | null;

    if(page <= 1){
        prevPage = null;
    } else {
        prevPage = `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`;
    };

    let nextPage: string | null;

    if(perPage < 1 || perPage > 5){
        perPage = 5;
        nextPage = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`;
    }else {
        nextPage = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`;
    };

    if(sort === "price"){
        orderObj = {price: order};
    } else if (sort === "duration"){
        orderObj = {duration: order};
    };

    if(!page || !perPage){
        movies = await moviesRepor.findAndCount({order: {id: "asc"}})
    } else {
        movies = await moviesRepor.findAndCount({
            take: perPage,
            skip: (page - 1) * perPage,
            order: orderObj
        });
    };

    const count : number = movies[1];

    if(count < perPage * page){
        nextPage = null;
    };
    
    return {
        prevPage: prevPage,
        nextPage: nextPage,
        count: count,
        data: movies[0]
    };
    
};

export const updateMoviesService = async (movie: Movie, data: Partial<Movie>): Promise<Movie> => {

    return await moviesRepor.save({ ...movie, ...data })
    
};

export const deleteMoviesService = async (movie: Movie) => {

    await moviesRepor.remove(movie);

};

