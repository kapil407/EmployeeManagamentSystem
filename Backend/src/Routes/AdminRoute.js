import  express from 'express' 
import isVerify from '../Middleware/isVerify.js'   
import Authorization from '../Middleware/Authorization.js' 
import {createEmpController,updateEmpController,deleteEmpController,getAllEmployee } from '../Controller/Admin/Employee.Controller.js';
import { createManagerController,updateManager,deleteManager,getAllManager } from '../Controller/Admin/Manager.Controller.js';
import { createDepartmentController, deleteDepartmentController, getAllDepartmentController, updateDepartmentController } from '../Controller/Admin/Department.Controller.js';

const adminauthRouter=express.Router();

// employee manage
adminauthRouter.post('/create-employee',isVerify,Authorization("ADMIN"),createEmpController);
adminauthRouter.patch('/update-employee/:id',isVerify,Authorization('ADMIN'),updateEmpController);
adminauthRouter.delete('/delete-employee/:id',isVerify,Authorization('ADMIN'),deleteEmpController);
adminauthRouter.get('/get-all-employee',isVerify,Authorization('ADMIN'),getAllEmployee);

// manager manage

     adminauthRouter.post('/create-manager',isVerify,Authorization('ADMIN'),createManagerController);
     adminauthRouter.patch('/update-manager/:id',isVerify,Authorization('ADMIN'),updateManager);
     adminauthRouter.delete('/delete-manager/:id',isVerify,Authorization('ADMIN'),deleteEmpController);
     adminauthRouter.get('/get-all-manager',isVerify,Authorization('ADMIN'),getAllManager);

     // Department manage 

     adminauthRouter.post('/create-department',isVerify,Authorization('ADMIN'),createDepartmentController);
     adminauthRouter.patch('/update-department/:id',isVerify,Authorization('ADMIN'),updateDepartmentController);
     adminauthRouter.delete('/delete-department/:id',isVerify,Authorization('ADMIN'),deleteDepartmentController);
     adminauthRouter.get('/get-all-department',isVerify,Authorization('ADMIN'),getAllDepartmentController);

export default adminauthRouter;