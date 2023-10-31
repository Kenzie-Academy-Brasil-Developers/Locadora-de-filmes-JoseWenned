import { Repository } from "typeorm";
import { Movie } from "../entities";
import { Movies, MoviesAll, MoviesCreate, MoviesRead, MoviesUpdate } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { PaginationMovies } from "../interfaces/pagination.interfaces";

export const createMovieService = async (data: MoviesCreate) : Promise<Movie> => {
    
    const moviesRepor : Repository<Movie> = AppDataSource.getRepository(Movie);

    const movies : Movie = moviesRepor.create(data);

    await moviesRepor.save(movies);
    
    return movies;
}


export const readMoviesService = async (page: any, perPage: any, sort: string | null, order: string | null): Promise<PaginationMovies> => {
   
    const userRepor : Repository<Movie> = AppDataSource.getRepository(Movie);
    
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
        movies = await userRepor.findAndCount({order: {id: "asc"}})
    } else {
        movies = await userRepor.findAndCount({
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

export const updateMoviesService = async (movieData: MoviesUpdate, id: number): Promise<Movies> => {

    const userRepor: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldMovieData : Movie | null = await userRepor.findOneBy({
        id: id,
    });

    const newMovieData : Movie = userRepor.create({
        ...oldMovieData,
        ...movieData,
    });

    await userRepor.save(newMovieData);

    return newMovieData;
}

export const deleteMoviesService = async (id: number) => {
    const movieRepository : Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = await movieRepository.findOne({
        where: {
            id: id,
        }
    });

    await movieRepository.remove(movie!);
}

