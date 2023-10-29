import "express-async-errors";
import express , { Application } from "express";
import { routes } from "./routers/index.router";
import { handleErrors } from "./errors/handleError.errors";

export const app : Application = express();

app.use(express.json());

app.use("/", routes);
app.use(handleErrors);
