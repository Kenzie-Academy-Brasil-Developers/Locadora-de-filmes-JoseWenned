import "reflect-metadata";
import "dotenv/config";
import  app  from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()

.then( async () => {
    console.log("Database connected.")

    const PORT : number = parseInt(process.env.PORT!) || 3000;

    app.listen(PORT, async () => {
        console.log(`App running on http://localhost:${PORT}`);
    });
})
.catch((err) => console.error(err));


