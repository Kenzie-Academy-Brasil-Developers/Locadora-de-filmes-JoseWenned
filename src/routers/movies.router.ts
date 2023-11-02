import { Router } from "express";
import { createMoviesController, deleteMoviesController, readMoviesController, updateMoviesController } from "../controllers/movies.controller";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { movieCreateSchema } from "../schemas/movies.schema";
import { verifyName } from "../middlewares/verifyName.middleware";
import { verifyMovieId } from "../middlewares/verifyMovieId.middleware";

export const moviesRouter : Router = Router();

moviesRouter.post("/", verifyBody(movieCreateSchema), verifyName, createMoviesController);
moviesRouter.get("/", readMoviesController);

moviesRouter.use("/:id", verifyMovieId)
moviesRouter.patch("/:id", verifyBody, verifyName, updateMoviesController);
moviesRouter.delete("/:id", deleteMoviesController);