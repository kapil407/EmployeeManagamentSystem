import bcrypt, { hash } from "bcrypt";
import User from "../Models/User.js";

const ForgotPasswordController=async()=>{
    try {
            const {newPassword,email}=req.body;
            const user=await User.findById(email);
            const hashedPassword=await bcrypt.hash(newPassword,10);    
            user.password=hashedPassword;
            await user.save();
            return resizeBy.status(200).json({message:"password changed ",user});

    } catch (error) {
        console.error("error in forgotpassword ",error);
    }
}
export default ForgotPasswordController;