import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 
import {Request, Response} from "express";
import { UserService } from "../services/user.service";
import { ValidateUserSchema ,ValidateSignInSchema } from "./user.schema";
import { UserRole, UserStatus } from "../enums/user.enum";



const userService = new UserService();

const createToken = (user: any) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d"
    }
  );

const returnAuthPayload = (res: Response, user: any, message: string) => {
  const token = createToken(user);

  return res.status(200).json({
    message,
    token,
    user: {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      status: user.status
    }
  });
};



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

export const getMe = async (req: any, res: Response) => {
  try {
    const user = await userService.getUserByIdService(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const { password, ...returnedUser } = user;
    return res.status(200).json({
      message: "User fetched successfully",
      user: returnedUser
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
      return res.status(400).json({ message:"Invalid password"});
    }
    return returnAuthPayload(res, existingUser, "User connected successfully");
  }

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password || password.length < 6) {
      return res.status(400).json({
        message: "Email and a password with at least 6 characters are required"
      });
    }

    const existingUser = await userService.getUserByEmailService(email);

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userService.updateUserService(existingUser.id, { password: hashedPassword });

    return res.status(200).json({
      message: "Password reset successfully"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while resetting password",
      error
    });
  }
};

export const googleSignIn = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const existingUser = await userService.getUserByEmailService(email);

    if (existingUser) {
      return returnAuthPayload(res, existingUser, "Google account connected successfully");
    }

    const [firstname, ...rest] = (name || email.split("@")[0]).trim().split(" ");
    const lastname = rest.join(" ") || "Student";
    const createdUser = await userService.createUserService({
      firstname,
      lastname,
      email,
      password: `google-${Date.now()}`,
      birthday: new Date(),
      status: UserStatus.ACTIVE,
      avatar: "",
      role: UserRole.STUDENT
    });

    if (typeof createdUser === "string") {
      return res.status(400).json({ message: "Unable to create Google account" });
    }

    return returnAuthPayload(res, createdUser, "Google account created successfully");
  } catch (error) {
    return res.status(500).json({
      message: "Error while connecting Google account",
      error
    });
  }
};
  





