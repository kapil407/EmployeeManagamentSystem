import bcrypt, { hash } from "bcrypt";
import User from "../../Models/User.js";

const ForgotPasswordController=async(req,res)=>{
    try {
            const {password,email}=req.body;
            const user=await User.findOne({email});
            const hashedPassword=await bcrypt.hash(password,10);    
            user.password=hashedPassword;
            await user.save();
            return res.status(200).json({message:"password change ",user,success:true});

    } catch (error) {
        console.error("error in forgotpassword ",error);
         return res.status(500).json({message:" error in password changed ",error ,success:false});
    }
}
export default ForgotPasswordController;