import * as z from "zod";
import { UserRole, UserStatus } from "../enums/user.enum";

export const ValidateUserSchema= z.object({
    firstname:z.string().min(2,"Name must be at least 2 caracters"),
    lastname:z.string().min(2,"Name must be at least 2 caracters"),
    email:z.email("Unvalid email adress"),
    password :z.string().min(8,"Password must be at least 8 caracters"),
    birthday :z.string(),
    status :z.enum(UserStatus),
    avatar:z.string().min(6,"Avatar must be at least 6 caracters"),
    


})
;

export const ValidateSignInSchema= z.object({
       email:z.email("Unvalid email adress"),
    password :z.string().min(8,"Password must be at least 8 caracters"),
});