import UserModel from "../model/user.model";
import { Request, Response } from "express";
import ResetTokenModel from "../model/resetToken.model";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.create({ email, password });
    return res.status(201).json({ user });
  } catch (error) { 
    return res.status(500).json({ error:"Registration Failed" });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {

    const { email } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
        await ResetTokenModel.deleteMany({ email }).then(() => console.log("deleted"));

         const resetToken = await ResetTokenModel.create({ email});
         console.log(resetToken);          
        return res.status(200).json({ token:resetToken.token });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
    }


export const setNewPassword = async (req: Request, res: Response) => {

    try{
        const { password,token } = req.body;
        const resetToken =await  ResetTokenModel.findOne({ token });
        if (resetToken) {
            const user = await UserModel.findOne({ email: resetToken.email});
            if (user) {
                user.password = password;
                await user.save();
                await ResetTokenModel.deleteMany({ email: resetToken.email });
                return res.status(200).json({ user });
            }
        }

    }

    catch (error) {
        return res.status(500).json({ error });
    }

}