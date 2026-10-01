import express from "express";
import {registerController} from '../Controller/Auth/Register.js'
import isVerify from "../Middleware/isVerify.js";

import loginController from '../Controller/Auth/Login.js'
import ForgotPasswordController from "../Controller/Auth/ForgotPassword.js";

const authRouter = express.Router();
authRouter.post("/register", registerController);

// forgot password while logging 

authRouter.patch('/reset-password',ForgotPasswordController);

authRouter.post("/login", loginController);


export default authRouter;
