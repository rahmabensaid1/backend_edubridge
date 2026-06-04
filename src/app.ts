import dotenv from "dotenv";
dotenv.config();

import cors from "cors" ;
import parcoursRoutes from "./routes/parcours.route";
import institutionRoutes from "./routes/institution.route";
import eventRoutes from "./routes/event.route";
import formationRoutes from "./routes/formation.route";
import dossierRoutes from "./routes/dossier.route";
import profileRoutes from "./routes/profile.route";
import adminRoutes from "./routes/admin.route";
import documentRoutes from "./routes/document.route";
import notificationRoutes from "./routes/notification.route";
import chatRoutes from "./routes/chat.route";
import chatbotRoutes from "./routes/chatbot.route";
import recommendationRoutes from "./routes/recommendation.route";
import statistiqueRoutes from "./routes/statistique.route";
import dashboardRoutes from "./routes/dashboard.route";
import housingOfferRoutes from "./routes/housing-offer.route";
import { seedHousingOffers } from "./seeds/housing-offers.seed";
import { seedChatbotResponses } from "./seeds/chatbot-responses.seed";

import express from 'express';
import userRoutes from './routes/user.route';
import { AppDataSource } from './config/data-source';
import { authMiddleware } from "./middlewares/auth.middleware";
import { seedInstitutions } from "./seeds/institutions.seed";






const app = express();
app.use(express.json({ limit: "20mb" }));
const PORT: number = Number(process.env.PORT || 5000);



app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.use(cors({origin : "*" }))

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use('/users', userRoutes,);
app.use("/events", eventRoutes);
app.use("/institutions", institutionRoutes);
app.use("/parcours", authMiddleware,parcoursRoutes);
app.use("/formations", formationRoutes);
app.use("/dossiers", dossierRoutes);
app.use("/profiles", authMiddleware, profileRoutes);
app.use("/admins", authMiddleware, adminRoutes);
app.use("/documents", authMiddleware, documentRoutes);
app.use("/notifications", notificationRoutes);
app.use("/chats", authMiddleware, chatRoutes);
app.use("/chatbots", chatbotRoutes);
app.use("/recommendations", authMiddleware, recommendationRoutes);
app.use("/statistiques", authMiddleware, statistiqueRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/housing-offers", housingOfferRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log("DataBase connected");

    await seedInstitutions();
    await seedHousingOffers();
    await seedChatbotResponses();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur DB", error);
    process.exit(1);
  });
