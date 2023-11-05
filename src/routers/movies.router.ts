import { Router } from "express";
import { createMoviesController, deleteMoviesController, readMoviesController, updateMoviesController } from "../controllers/movies.controller";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { verifyName } from "../middlewares/verifyName.middleware";
import { verifyMovieId } from "../middlewares/verifyMovieId.middleware";
import { pagination } from "../middlewares/pagination.middleware"

export const moviesRouter : Router = Router();

moviesRouter.post("/", verifyBody(movieCreateSchema), verifyName, createMoviesController);
moviesRouter.get("/", pagination ,readMoviesController);

moviesRouter.patch("/:id", verifyBody(movieUpdateSchema), verifyName, verifyMovieId,  updateMoviesController);
moviesRouter.delete("/:id", verifyMovieId, deleteMoviesController);