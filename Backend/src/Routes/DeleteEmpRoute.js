import express from "express";
import isVerify from "../Middleware/isVerify.js";
import Authorization from "../Middleware/Authorization.js";
import deleteController from "../Controller/DeleteEmp.js";
const deleteRoute = express.Router();
deleteRoute.delete(
  "/deleteEmp/:id",
  isVerify,
  Authorization("Admin"),
  deleteController,
);
export default deleteRoute;
