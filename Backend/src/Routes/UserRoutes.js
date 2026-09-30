import express from "express";
import isVerify from "../Middleware/isVerify.js";
import getMyProfileController from "../Controller/User/GetMyProfile.js";
import updateMyProfileController from "../Controller/Setting/UpdateMyProfile.js";

import ForgotPasswordController from "../Controller/Auth/ForgotPassword.js";
import changePasswordController from "../Controller/User/ChangePassword.js";


const profileRouter = express.Router();

// both admin and emp can see their profile

profileRouter.get("/my-profile/:id", isVerify, getMyProfileController);


// Both update their profile

profileRouter.patch('/update-myProfile',isVerify,updateMyProfileController);

// both admin and emp can reset their password 

profileRouter.patch("/change-myPassword", isVerify, changePasswordController);

export default profileRouter;
