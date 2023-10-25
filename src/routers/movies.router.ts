import { Router } from "express";

export const moviesRouter : Router = Router();

moviesRouter.post("/");
moviesRouter.get("/");
moviesRouter.patch("/:id");
moviesRouter.delete("/:id");