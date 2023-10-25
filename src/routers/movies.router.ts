import { Router } from "express";
import { createMovieController } from "../controllers/movies.controller";

export const moviesRouter : Router = Router();

moviesRouter.post("/", createMovieController);
moviesRouter.get("/");
moviesRouter.patch("/:id");
moviesRouter.delete("/:id");