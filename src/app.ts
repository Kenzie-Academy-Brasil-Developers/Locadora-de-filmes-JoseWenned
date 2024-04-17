import "express-async-errors";
import express , { Application, json } from "express";
import { routes } from "./routers/index.router";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json"

const app : Application = express();

app.use(json());
app.use("/", routes);
app.use(handleErrors);
app.use("/api-documentation", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))

export default app;