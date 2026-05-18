import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Parcours } from "../entities/parcours.entity";
import { CreateParcours } from "../interfaces/parcours.interface";
import { User } from "../entities/user.entity";

export class ParcoursService {
  private parcoursRepository: Repository<Parcours>;

  constructor() {
    this.parcoursRepository = AppDataSource.getRepository(Parcours);
  }

  async createParcoursService(data: CreateParcours, user : User): Promise<Parcours> {
    const parcours = this.parcoursRepository.create({...data,user:user});
    return await this.parcoursRepository.save(parcours);
  }

  async getParcoursService(): Promise<Parcours[]> {
    return await this.parcoursRepository.find();
  }

  async getParcoursByIdService(id: number): Promise<Parcours | null> {
    return await this.parcoursRepository.findOne({
      where: { id }
    });
  }

  async deleteParcoursService(id: number): Promise<boolean> {
    const result = await this.parcoursRepository.delete(id);
    return !!result.affected;
  }
}