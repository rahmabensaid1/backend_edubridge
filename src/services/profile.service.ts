import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Profile } from "../entities/profile.entity";
import { User } from "../entities/user.entity";
import { CreateProfile } from "../interfaces/profile.interface";

export class ProfileService {
  private profileRepo: Repository<Profile>;

  constructor() {
    this.profileRepo = AppDataSource.getRepository(Profile);
  }

  async createProfileService(data: CreateProfile, user: User): Promise<Profile> {
    const profile = this.profileRepo.create({ ...data, user });
    return await this.profileRepo.save(profile);
  }

  async getProfilesService(): Promise<Profile[]> {
    return await this.profileRepo.find({ relations: ["user"] });
  }

  async getProfileByIdService(id: number): Promise<Profile | null> {
    return await this.profileRepo.findOne({
      where: { id },
      relations: ["user"]
    });
  }

  async getProfileByUserIdService(userId: number): Promise<Profile | null> {
    return await this.profileRepo.findOne({
      where: { user: { id: userId } },
      relations: ["user"]
    });
  }

  async updateProfileService(id: number, data: Partial<CreateProfile>): Promise<Profile | null> {
    await this.profileRepo.update(id, data);
    return await this.getProfileByIdService(id);
  }

  async upsertProfileByUserService(data: CreateProfile, user: User): Promise<Profile> {
    const existingProfile = await this.getProfileByUserIdService(user.id);

    if (existingProfile) {
      Object.assign(existingProfile, data);
      return await this.profileRepo.save(existingProfile);
    }

    return await this.createProfileService(data, user);
  }

  async deleteProfileService(id: number): Promise<boolean> {
    const result = await this.profileRepo.delete(id);
    return !!result.affected;
  }
}
