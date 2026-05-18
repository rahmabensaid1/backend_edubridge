import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Recommendation } from "../entities/recommendation.entity";
import { User } from "../entities/user.entity";
import { CreateRecommendation } from "../interfaces/recommendation.interface";

export class RecommendationService {
  private repo: Repository<Recommendation>;

  constructor() {
    this.repo = AppDataSource.getRepository(Recommendation);
  }

  async createRecommendationService(data: CreateRecommendation, user?: User): Promise<Recommendation> {
    const recommendation = this.repo.create({ ...data, user });
    return await this.repo.save(recommendation);
  }

  async getRecommendationsService(): Promise<Recommendation[]> {
    return await this.repo.find({ relations: ["user", "formation", "institution"] });
  }

  async getMyRecommendationsService(userId: number): Promise<Recommendation[]> {
    return await this.repo.find({ where: { user: { id: userId } }, relations: ["user", "formation", "institution"] });
  }

  async deleteRecommendationService(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }
}
