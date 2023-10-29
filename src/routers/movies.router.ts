import { Router } from "express";
import { createMovieController, deleteMoviesController, readMoviesController, updateMoviesController } from "../controllers/movies.controller";

export const moviesRouter : Router = Router();

moviesRouter.post("/", createMovieController);
moviesRouter.get("/", readMoviesController);
moviesRouter.patch("/:id", updateMoviesController);
moviesRouter.delete("/:id", deleteMoviesController);