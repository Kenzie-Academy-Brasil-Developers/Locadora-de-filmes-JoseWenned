import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import { moviesRepor } from "../repositories";
import { Movie } from "../entities";

export const verifyMovieId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundMovie: Movie | null = await moviesRepor.findOneBy({
        id: Number(req.params.id), 
    });

    if(!foundMovie){
        throw new AppError("Movie not found", 404);
    };

    res.locals = {...res.locals, foundMovie}

    return next();

}