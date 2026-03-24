
import { UserRole, UserStatus } from "../enums/user.enum";

export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    birthday: Date;
    status :UserStatus;
    avatar: string;
    role? :UserRole

    
}


export interface CreateUser extends Omit <IUser,"id"> {}
    
    


