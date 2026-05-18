import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Formation } from "../entities/formation.entity";
import { CreateFormation } from "../interfaces/formation.interface";

export class FormationService {
  private formationRepository: Repository<Formation>;

  constructor() {
    this.formationRepository = AppDataSource.getRepository(Formation);
  }

  async createFormationService(data: CreateFormation): Promise<Formation> {
    const formation = this.formationRepository.create(data);
    return await this.formationRepository.save(formation);
  }

  async getFormationsService(): Promise<Formation[]> {
    return await this.formationRepository.find({
      relations: ["institution"]
    });
  }

  async getFormationByIdService(id: number): Promise<Formation | null> {
    return await this.formationRepository.findOne({
      where: { id },
      relations: ["institution"]
    });
  }

  async deleteFormationService(id: number): Promise<boolean> {
    const result = await this.formationRepository.delete(id);
    return !!result.affected;
  }
}
