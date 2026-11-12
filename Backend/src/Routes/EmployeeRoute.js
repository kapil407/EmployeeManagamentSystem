import express from 'express'

import isVerify from '../Middleware/isVerify.js';
import { ApplyLeave } from '../Controller/Employee/ApplyLeave.js';
import GetLeavehistory from '../Controller/Employee/MyleaveHistory.js';
const employeeRouter=express.Router();


employeeRouter.post('/apply-leave',isVerify,ApplyLeave);
employeeRouter.get('/get-leavehistory',isVerify,GetLeavehistory)
export default employeeRouter;