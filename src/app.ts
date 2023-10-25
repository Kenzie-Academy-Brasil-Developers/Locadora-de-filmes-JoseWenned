import "express-async-errors";
import express , { Application } from "express";
import { routes } from "./routers/index.router";

export const app : Application = express();

app.use(express.json());

app.use("/", routes);
