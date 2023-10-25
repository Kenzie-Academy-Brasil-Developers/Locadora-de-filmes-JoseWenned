import { Request, Response } from "express";
import { createMovieService } from "../services/movies.service";
import { Movie } from "../entities";


export const createMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movies : Movie = await createMovieService(req.body);

    return res.status(201).json(movies);
};