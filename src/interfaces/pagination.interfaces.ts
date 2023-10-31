import { MoviesAll } from "./movies.interfaces";

export type PaginationMovies = {
    prevPage: string,
    nextPage: string,
    count: number,
    data: MoviesAll,
};

