import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/AppError.error";

export const verifyMovie = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const id: number = Number(req.params.id);

    const userRepor : Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = await userRepor.findOne({
        where: {
            id: id,
        }
    });

    if(!movie){
        throw new AppError("Movie not found", 404);
    };

    return next();

}