import bcrypt from "bcrypt"; 
import { Repository } from "typeorm";
import { CreateUser, IUser } from "../interfaces/user.interface";

import { User  } from "../entities/user.entity"
import { AppDataSource } from "../config/data-source";

export class UserService{

    private userRepository : Repository<User>
constructor(){
    this.userRepository=AppDataSource.getRepository(User)
}

async getUsersService(): Promise<User[]> {
  return await this.userRepository.find();
}






async createUserService(data: CreateUser): Promise <User|string> {

    const existingUser =await this.getUserByEmailService(data.email)
    if (existingUser){
      return "user_not_exist"
    }
    
    let hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser: IUser = this.userRepository.create({...data, password : hashedPassword})
    const userSaved = await this.userRepository.save(newUser)
    
    return userSaved;
}


async getUserByIdService(id: number): Promise<User | null> {
  const user = await this.userRepository.findOne({
    where: { id }
  });

  return user;
}

async getUserByEmailService(email: string): Promise<User | null> {
  const user = await this.userRepository.findOne({
    where: { email }
  });

  return user;
}



async updateUserService(id: number, data: Partial<User>): Promise<User | null> {
  const user = await this.userRepository.findOne({
    where: { id }
  });

  if (!user) {
    return null;
  }

  Object.assign(user, data);

  const updatedUser = await this.userRepository.save(user);
  return updatedUser;
}




async deleteUserService(id: number): Promise<boolean> {
  const result = await this.userRepository.delete(id);

  return result.affected ? true : false;
}

}

