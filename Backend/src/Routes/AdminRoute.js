import  express from 'express' 
import isVerify from '../Middleware/isVerify.js'   
import Authorization from '../Middleware/Authorization.js' 
import {createEmpController,updateEmpController,deleteEmpController,getAllEmployee } from '../Controller/Admin/Employee.Controller.js';
import { createManagerController,updateManager,deleteManager,getAllManager } from '../Controller/Admin/Manager.Controller.js';

const adminauthRouter=express.Router();

// employee manage
adminauthRouter.post('/create-employee',isVerify,Authorization("ADMIN"),createEmpController);
adminauthRouter.patch('/update-employee',isVerify,Authorization('ADMIN'),updateEmpController);
adminauthRouter.delete('/delete-employee',isVerify,Authorization('ADMIN'),deleteEmpController);
adminauthRouter.get('/get-all-employee',isVerify,Authorization('ADMIN'),getAllEmployee);

// manager manage

     adminauthRouter.post('/create-manager',isVerify,Authorization('ADMIN'),createManagerController);
     adminauthRouter.patch('/update-manager',isVerify,Authorization('ADMIN'),updateManager);
     adminauthRouter.delete('/delete-manager',isVerify,Authorization('ADMIN'),deleteEmpController);
     adminauthRouter.get('/get-all-manager',isVerify,Authorization('ADMIN'),getAllManager);

export default adminauthRouter;