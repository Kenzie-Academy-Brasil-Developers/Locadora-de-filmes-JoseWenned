import { Request, Response } from "express";
import { createMovieService, deleteMoviesService, readMoviesService, updateMoviesService } from "../services/movies.service";
import { Movie } from "../entities";
import { Pagination } from "../interfaces/pagination.interfaces";

export const createMoviesController = async (req: Request, res: Response): Promise<Response> => {

    const movies : Movie = await createMovieService(req.body);

    return res.status(201).json(movies);

};

export const readMoviesController = async (req: Request, res: Response): Promise<Response> => {

    const movies : Pagination = await readMoviesService(res.locals.pagination);
    
    return res.status(200).json(movies);

};

export const updateMoviesController = async (req: Request, res: Response): Promise<Response> => {
    
    const { foundMovie } = res.locals;

    const movie : Movie = await updateMoviesService(foundMovie, req.body);

    return res.status(200).json(movie);

};

export const deleteMoviesController = async (req: Request, res: Response): Promise<Response> => {

    await deleteMoviesService(res.locals.foundMovie);

    return res.status(204).send();

};