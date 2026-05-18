import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Statistique } from "../entities/statistique.entity";
import { CreateStatistique } from "../interfaces/statistique.interface";

export class StatistiqueService {
  private repo: Repository<Statistique>;

  constructor() {
    this.repo = AppDataSource.getRepository(Statistique);
  }

  async createStatistiqueService(data: CreateStatistique): Promise<Statistique> {
    const statistique = this.repo.create(data);
    return await this.repo.save(statistique);
  }

  async getStatistiquesService(): Promise<Statistique[]> {
    return await this.repo.find();
  }

  async updateStatistiqueService(id: number, data: Partial<CreateStatistique>): Promise<Statistique | null> {
    await this.repo.update(id, data);
    return await this.repo.findOne({ where: { id } });
  }
}
