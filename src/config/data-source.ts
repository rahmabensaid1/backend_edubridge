import "reflect-metadata"
import {DataSource} from "typeorm"
import { User } from "../entities/user.entity"
import { Event } from "../entities/event.entity"
import { Institution } from "../entities/institution.entity"
import { Parcours } from "../entities/parcours.entity";
import { Formation } from "../entities/formation.entity";
import { Dossier } from "../entities/dossier.entity";
import { Profile } from "../entities/profile.entity";
import { Admin } from "../entities/admin.entity";
import { Document } from "../entities/document.entity";
import { Notification } from "../entities/notification.entity";
import { Chat } from "../entities/chat.entity";
import { Chatbot } from "../entities/chatbot.entity";
import { Recommendation } from "../entities/recommendation.entity";
import { Statistique } from "../entities/statistique.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "rahma1234",
    database: process.env.DB_DATABASE || "edubridge",
    synchronize: process.env.TYPEORM_SYNCHRONIZE !== "false",
    logging: process.env.TYPEORM_LOGGING === "true",
    entities : [
        User,
        Event,
        Institution,
        Parcours,
        Formation,
        Dossier,
        Profile,
        Admin,
        Document,
        Notification,
        Chat,
        Chatbot,
        Recommendation,
        Statistique
    ],
})
