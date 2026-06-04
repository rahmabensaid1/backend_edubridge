import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { HousingOffer } from "../entities/housing-offer.entity";

export class HousingOfferService {
  private repo: Repository<HousingOffer>;

  constructor() {
    this.repo = AppDataSource.getRepository(HousingOffer);
  }

  async create(data: Partial<HousingOffer>) {
    const offer = this.repo.create(data);
    return await this.repo.save(offer);
  }

  async getAll() {
    return await this.repo.find({ order: { createdAt: "DESC" } });
  }

  async update(id: number, data: Partial<HousingOffer>) {
    const offer = await this.repo.findOne({ where: { id } });
    if (!offer) return null;

    Object.assign(offer, data);
    return await this.repo.save(offer);
  }

  async delete(id: number) {
    const result = await this.repo.delete(id);
    return !!result.affected;
  }
}
