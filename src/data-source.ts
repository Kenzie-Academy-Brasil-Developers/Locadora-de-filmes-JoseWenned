import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = () : DataSourceOptions => {
    const entitiesPath : string = path.join(__dirname, "./entities/**.{ts, js}");
    const migrationPath : string = path.join(__dirname, "./migrations/**.{ts, js}");

    if(process.env.NODE_ENV === "test"){
        return{
            type: "sqlite",
            database: ":memory",
            synchronize: true,
            entities: [entitiesPath]
        };
    };

    if(!process.env.DATABASE_URL) throw new Error ("Missing env var: 'DATABASE_URL'");

    return{
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationPath]
    };

};

export const AppDataSource : DataSource = new DataSource(dataSourceConfig());