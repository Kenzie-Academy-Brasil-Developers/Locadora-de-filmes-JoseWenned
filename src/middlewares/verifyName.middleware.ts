import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/handleError.errors";

export const verifyName = async (req: Request, res: Response, next: NextFunction) : Promise<Response | void> => {
    const nameMovie = req.body.name;

    const userRepor: Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = await userRepor.findOneBy({
        name: nameMovie,
    });

    if(nameMovie === undefined){
        return next();
    };

    if(movie){
        throw new AppError("Movie already exists", 409);
    };

    return next();

}