import "reflect-metadata";
import "dotenv/config";
import  app  from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()

.then( async () => {
    console.log("Database connected.")

    const PORT : number = Number(process.env.PORT) || 3000;

    app.listen(PORT, (): void => {
        console.log(`App is running at port${PORT}`);
    });
})
.catch((err: unknown): void => console.error(err));


