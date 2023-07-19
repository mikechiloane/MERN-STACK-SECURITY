import { Request, Response } from "express";
import UserModel from "../model/user.model";
import ResetTokenModel from "../model/resetToken.model";

export const login = async (req: Request, res: Response) => {
    
    const { email, password } = req.body;
    try {
        const user =await UserModel.find({ email, password });
        if (user.length > 0) {
            return res.status(200).json({ user });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};


export const verifyOtp = async (req: Request, res: Response) => {



    try {
        const { otp,email } = req.body;
        console.log(otp,email);
        const resetToken = await ResetTokenModel.findOne({ otp, email });
        if (resetToken!==null) {
            return res.status(200).json({ token: resetToken.token});
        }
        return res.status(404).json({ error: 'Invalid token' });
    } catch (error) {
        return res.status(500).json({ error });
    }

}


export const resetPassword = async (req: Request, res: Response) => {
    
        try {
            const { password } = req.body;
            const resetToken = await ResetTokenModel.find({ password });
            if (resetToken.length > 0) {
                return res.status(200).json({ resetToken });
            }
            return res.status(404).json({ error: 'User not found' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    
}
