import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Admin } from "../entities/admin.entity";
import { User } from "../entities/user.entity";
import { CreateAdmin } from "../interfaces/admin.interface";

export class AdminService {
  private adminRepo: Repository<Admin>;

  constructor() {
    this.adminRepo = AppDataSource.getRepository(Admin);
  }

  async createAdminService(data: CreateAdmin, user: User): Promise<Admin> {
    const admin = this.adminRepo.create({ ...data, user });
    return await this.adminRepo.save(admin);
  }

  async getAdminsService(): Promise<Admin[]> {
    return await this.adminRepo.find({ relations: ["user"] });
  }

  async getAdminByIdService(id: number): Promise<Admin | null> {
    return await this.adminRepo.findOne({
      where: { id },
      relations: ["user"]
    });
  }

  async getAdminByUserIdService(userId: number): Promise<Admin | null> {
    return await this.adminRepo.findOne({
      where: { user: { id: userId } },
      relations: ["user"]
    });
  }

  async updateAdminService(id: number, data: Partial<CreateAdmin>): Promise<Admin | null> {
    await this.adminRepo.update(id, data);
    return await this.getAdminByIdService(id);
  }

  async deleteAdminService(id: number): Promise<boolean> {
    const result = await this.adminRepo.delete(id);
    return !!result.affected;
  }
}
