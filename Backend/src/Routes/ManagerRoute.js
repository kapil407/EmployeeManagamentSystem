import express from "express";
import isVerify from "../Middleware/isVerify.js";
import ApplyLeave from "../Controller/Manager/ApplyLeave.js";
import GetTeamLeave from "../Controller/Manager/TeamLeave.js";
import Authorization from "../Middleware/Authorization.js";
import UpdateLeaveStatus from "../Controller/Manager/LeaveStatusUpdate.js";
import GetAllLeave from "../Controller/Manager/MyLeaveHistory.js";
import SearchLeaveController from "../Controller/Manager/Searchleave.js";
import getMyTeam from "../Controller/Manager/GetMyTeam.js";
import getTeamMemberProfile from "../Controller/Manager/GetTeamMemberProfile.js";
import SearchTeamMember from "../Controller/Manager/SearchTeamMember.js";


const managerRouter = express.Router();

managerRouter.post("/apply-leave", isVerify, ApplyLeave);
managerRouter.get(
  "/get-All-teamleave",
  isVerify,
  Authorization("MANAGER"),
  GetTeamLeave,
);
managerRouter.patch(
  "/Update-Leavestatus",
  isVerify,
  Authorization("MANAGER"),
  UpdateLeaveStatus,
);
managerRouter.get("/get-AllMyleave", isVerify, GetAllLeave);
managerRouter.post('/search-leave',isVerify,Authorization('MANAGER'),SearchLeaveController)
managerRouter.get('/get-myteam',isVerify,Authorization('MANAGER'),getMyTeam)
managerRouter.get('/get-team-empprofile/:id',isVerify,Authorization('MANAGER'),getTeamMemberProfile);
managerRouter.post('/search-team-member',isVerify,Authorization("MANAGER"),SearchTeamMember);
export default managerRouter;
