import { Router } from "express";
import { createMovieController, deleteMoviesController, readMoviesController, updateMoviesController } from "../controllers/movies.controller";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { movieSchema } from "../schemas/movies.schema";
import { verifyName } from "../middlewares/verifyName.middleware";
import { verifyMovie } from "../middlewares/verifyMovie.middleware";

export const moviesRouter : Router = Router();

moviesRouter.post("/", verifyBody(movieSchema), verifyName, createMovieController);
moviesRouter.get("/", readMoviesController);
moviesRouter.patch("/:id", verifyBody, verifyMovie, verifyName, updateMoviesController);
moviesRouter.delete("/:id", verifyMovie, deleteMoviesController);