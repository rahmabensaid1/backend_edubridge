import bcrypt from "bcrypt"; 
import {Request, Response} from "express";
import { UserService } from "../services/user.service";
import { ValidateUserSchema ,ValidateSignInSchema } from "./user.schema";



const userService = new UserService();




export const createUser = async (req: Request, res: Response) => { 

    const schemaResult=ValidateUserSchema.safeParse(req.body)
    if (!schemaResult.success) {
        return res.status(400).json({ message:schemaResult.error.issues[0].message });
    }

    const newUser = await userService.createUserService(req.body);
    if (newUser==="user_not_exist") {
      return res.status(400).json({message: " Mail already exists"}); 
    }
    const {password,...returnedUser }:any=newUser;
    return res.status(201).json({message: "User created successfully", user: returnedUser}); 
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsersService();
    return res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching users", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    const user = await userService.getUserByIdService(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const {password,...returnedUser }=user;
    return res.status(200).json({
      message: "User fetched successfully",
      user :returnedUser
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching user",
      error
    });
  }
};



export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    const updatedUser = await userService.updateUserService(id, req.body);

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while updating user",
      error
    });
  }
};



export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    const isDeleted = await userService.deleteUserService(id);

    if (!isDeleted) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error while deleting user",
      error
    });
  }
};

export const signIn = async(req: Request, res: Response) => {
  const{email , password}= req.body;
  const schemaResult=ValidateSignInSchema.safeParse({email , password})
    if (!schemaResult.success) {
        return res.status(400).json({ message:schemaResult.error.issues[0].message });
    }
      const existingUser =await userService.getUserByEmailService(email)
    if (!existingUser){
        return res.status(400).json({ message:"User doesnt exist"});
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
 
    if (!isPasswordValid)
    {
      return res.status(400).json({ message:"Unvalid password"});
    }
    return res.status(200).json({ message:"User Connected"});
    



}

