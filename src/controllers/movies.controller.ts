import { Request, Response } from "express";
import { createMovieService, readMoviesService } from "../services/movies.service";
import { Movie } from "../entities";
import { MoviesAll } from "../interfaces/movies.interfaces";


export const createMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movies : Movie = await createMovieService(req.body);

    return res.status(201).json(movies);

};

export const readMoviesController = async (req: Request, res: Response): Promise<Response> => {
    
    let page: number = Number(req.query.page) || 1;
    let perPage: number = Number(req.query.perPage) || 5;

    if(page <= 0){
        page = 1;
    };

    const sort: any = req.query.sort;
    let order: any = req.query.order || "asc";

    const movies: MoviesAll = await readMoviesService(
        page,
        perPage,
        sort,
        order
    );
    
    return res.status(200).json(movies);

};