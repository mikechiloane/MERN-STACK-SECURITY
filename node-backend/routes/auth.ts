import express, { Router, Request, Response } from 'express';
import { login } from '../controller/auth.controller';
import { register } from '../controller/user.controller';
import { verifyOtp } from '../controller/auth.controller';
import { forgotPassword } from '../controller/user.controller';
import {setNewPassword} from '../controller/user.controller';

const authRouter = express.Router();

authRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from the auth router');
    }
);

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.post('/newpassword', setNewPassword );

authRouter.post('/forgot', forgotPassword );

authRouter.post('/verify', verifyOtp );

authRouter.post('/reset', forgotPassword );

module.exports = authRouter;