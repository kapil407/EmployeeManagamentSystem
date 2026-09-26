import express from "express";
import GetAllProfile from "../Controller/GetAllProfile.js";
import isVerify from "../Middleware/isVerify.js";
import getprofileController from "../Controller/Getprofile.js";
import updateMyProfileController from "../Controller/Setting/UpdateMyProfile.js";
import Authorization from "../Middleware/Authorization.js";
import updateEmpController from "../Controller/UpdateEmp.js";
import changePassword from "../Controller/Setting/ChangePassword.js";


const profileRouter = express.Router();

// both admin and emp can see their profile

profileRouter.get("/profile/:id", isVerify, getprofileController);

// only admin can see all emp profile 

profileRouter.get(
  "/allProfile",
  isVerify,
  Authorization("Admin"),
  GetAllProfile,
);

// Both update their profile

profileRouter.patch('/myProfile',isVerify,updateMyProfileController);

// only admin can update emp

profileRouter.patch(
  "/updateEmp/:id",
  isVerify,
  Authorization("Admin"),
  updateEmpController,
);

// both admin and emp can reset their password 

profileRouter.patch("/changePassword", isVerify, changePassword);

export default profileRouter;
