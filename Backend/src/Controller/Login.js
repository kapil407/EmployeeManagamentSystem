// import { json } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();
const loginController=async(req,res)=>{
    try {   
        const {emailId,password}=req.body;
            if(!emailId || !password){
                return res.json({message:"all fields are required "});
            }
            const user=await User.findOne({emailId});
            if(!user){
                return res.status(400).json({message:" user not found"});
            }
            const isMatched=await bcrypt.compare(password,user?.password);
            if(!isMatched){
                return res.json({message:"password is incorrect"});
            }

            const accessToken=await jwt.sign({userId:user._id,role:user.role},process.env.accessToken_Secret,{
                expiresIn:"1d"
            });
            res.cookie('accessToken',accessToken);
         return res.status(200).json({message:"login successfully",user});

    } catch (error) {
        console.log("login error",error);
        return res.status(500).json({message:"login error",error});
    }
}
export default loginController