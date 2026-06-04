import { AppDataSource } from "../config/data-source";
import { Chatbot } from "../entities/chatbot.entity";

const chatbotFaq = require("../data/chatbot-faq.json") as {
  faq: { id: number; question: string; answer: string }[];
};

export async function seedChatbotResponses() {
  const repo = AppDataSource.getRepository(Chatbot);

  for (const item of chatbotFaq.faq.slice(0, 30)) {
    const exists = await repo.findOne({ where: { nom: item.question } });

    if (!exists) {
      await repo.save(
        repo.create({
          nom: item.question,
          modele: item.answer,
          langue: "FR",
          category: "FAQ",
          active: true
        })
      );
    }
  }
}
