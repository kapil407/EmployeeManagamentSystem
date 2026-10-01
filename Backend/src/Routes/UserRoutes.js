import express from "express";
import isVerify from "../Middleware/isVerify.js";
import getMyProfileController from "../Controller/User/GetMyProfile.js";
import updateMyProfileController from "../Controller/User/UpdateMyProfile.js";

import changePasswordController from "../Controller/User/ChangePassword.js";
import logOutController from "../Controller/User/Logout.js";

const profileRouter = express.Router();

// both admin and emp can see their profile

profileRouter.get("/my-profile/:id", isVerify, getMyProfileController);

// Both update their profile

profileRouter.patch("/update-myProfile", isVerify, updateMyProfileController);

profileRouter.patch("/change-password", isVerify, changePasswordController); // this can only be done if user is already login

profileRouter.post("/logout", isVerify, logOutController);

export default profileRouter;
