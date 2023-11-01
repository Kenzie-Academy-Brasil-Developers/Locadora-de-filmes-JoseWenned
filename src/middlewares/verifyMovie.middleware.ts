import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import { moviesRepor } from "../repositories";

export const verifyMovieId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const id: number = Number(req.params.id);

    const foundMovie = await moviesRepor.findOne({
        where: {
            id: id,
        }
    });

    if(!foundMovie){
        throw new AppError("Movie not found", 404);
    };

    res.locals = {...res.locals, foundMovie}

    return next();

}