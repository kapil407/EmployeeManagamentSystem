import express from "express";
import { registerController } from "../Controller/Register.js";
import upload from "../Middleware/multer.js";

import loginController from "../Controller/Login.js";

const authRouter = express.Router();
authRouter.post("/register", upload.single("fileImage"), registerController);

authRouter.post("/login", loginController);


export default authRouter;
