import User from "../../Models/User.js";
import bcrypt from 'bcrypt'
const logOutController=async(req,res)=>{
    try {
           
            const refreshToken=req.cookies.refreshToken;
                //1:Both accessToken and refresh token both are valid  
                res.clearCookie('accessToken',{
               httpOnly:true,
                secure:true
                });
                res.clearCookie('refreshToken',{
                    httpOnly:true,
                    secure:true
                })
                // refresh Token is expired 
                if(!refreshToken){
                    return res.status(200).json({message:"logout ",success:true});
                }
                // both expired then decoded payload from expired token

                const decoded=await bcrypt.decode(refreshToken);
                if(!decoded.userId){
                      return res.status(200).json({message:"logout ",success:true});
                }
                const user=await User.findById(decoded.userId);
                if(user){
                const UpdatedTokenData=[];
                    for( const hashedrefreshToken of user.refreshTokens){
                        const isMatch=await bcrypt.compare(refreshToken,hashedrefreshToken);
                        if(!isMatch){
                            UpdatedTokenData.push(hashedrefreshToken);
                        }
                    }
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