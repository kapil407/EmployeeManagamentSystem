import User from "../../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const logOutController=async(req,res)=>{
    try {
           
            const refreshToken=req.cookies.refreshToken;
            const accessToken=req.cookies.accessToken;

                //1:Both accessToken and refresh token both are valid  
                if(!accessToken){
                res.clearCookie('refreshToken',{
                    httpOnly:true,
                    secure:true
                })
                return res.status(200).json({message:"logout ",success:true});
            }
              
                const decoded=await jwt.verify(accessToken,process.env.accessToken_Secret);
             
                const user=await User.findById(decoded.userId);
                if(user){
                const UpdatedTokenData=[];
                let flag=true;
                    for( const ref of user.refreshTokens){
                        const isMatch=await bcrypt.compare(refreshToken,ref);
                        if(isMatch){
                           flag=false;
                        }
                    }
                    res.clearCookie('accessToken',{
                        httpOnly:true,
                        secure:true
                    })
                      res.clearCookie('refreshToken',{
                        httpOnly:true,
                        secure:true
                    })
                    user.refreshTokens=UpdatedTokenData;
                    await user.save();
                }
                  return res.status(200).json({message:"logout ",success:true});       
    } 
    catch (error) {
        console.error("error in logout controller ",error);
        return res.status(500).json({message:"error in logout ",error,success:false});
    }
 }
 export default logOutController;