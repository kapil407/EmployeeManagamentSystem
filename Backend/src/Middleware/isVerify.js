import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken'
import User from '../Models/User.js';
import dotenv from 'dotenv';
dotenv.config();
const isVerify=async(req,res,next)=>{
    const accessToken=req?.cookies?.accessToken;
    console.log("access",accessToken);
    if(!accessToken){
        return res.status(400).json({message:"accessToken not found"});
    }
    const decoded =await jwt.verify(accessToken,process.env.accessToken_Secret);
    console.log("decoded",decoded);
    const id=decoded.userId;
    console.log("id->>",id);
    const user=await User.findById(id);
    req.user=user; 
    req.userId=id;
    next();
}
export default isVerify; 