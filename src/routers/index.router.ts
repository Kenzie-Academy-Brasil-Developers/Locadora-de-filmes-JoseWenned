import { Router } from "express";
import { moviesRouter } from "./movies.router";

export const routes : Router = Router();

routes.use("/movies", moviesRouter);