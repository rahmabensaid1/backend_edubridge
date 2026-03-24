import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "rahma1234",
    database: "edubridge",
    synchronize: true,
    logging: false,
    entities: [User],
});