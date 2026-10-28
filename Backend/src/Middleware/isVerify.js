import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken'
import User from '../Models/User.js';
import dotenv from 'dotenv';
dotenv.config();
const isVerify=async(req,res,next)=>{

   try {
   
     const accessToken=req?.cookies?.accessToken;
      // console.log("accesstpken  ",accessToken);
      // console.log(req.cookies.refreshToken);
     if(!accessToken){
         return res.status(400).json({message:"accessToken not found"});
     }
      
     const decoded = jwt.verify(accessToken,process.env.accessToken_Secret);
    
     const id=decoded.userId;
   
     const user=await User.findById(id);
     req.user=user; 
     req.userId=id;
     next();
   } catch (error) {
    res.status(500).json({message:"authentication verification failed ",error})
   }
}
export default isVerify; 