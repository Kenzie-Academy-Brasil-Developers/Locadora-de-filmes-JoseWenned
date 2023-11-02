import { MoviesRead } from "./movies.interfaces";

export type Pagination = {
    prevPage: string | null,
    nextPage: string | null,
    count: number,
    data: MoviesRead,
};

export type PaginationParams = {
    page: number,
    perPage: number,
    prevPage: string | null,
    nextPage: string | null 
};

