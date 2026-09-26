import express from "express";
import { registerController } from "../Controller/Register.js";
import upload from "../Middleware/multer.js";
import CreateEmpController from "../Controller/CreateEmp.js";
import loginController from "../Controller/Login.js";

import isVerify from "../Middleware/isVerify.js";

import Authorization from "../Middleware/Authorization.js";
const authRouter = express.Router();
authRouter.post("/register", upload.single("fileImage"), registerController);
authRouter.post('/createEmp',isVerify,Authorization("Admin"),CreateEmpController);    
authRouter.post("/login", loginController);

export default authRouter;
