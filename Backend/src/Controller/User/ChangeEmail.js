import User from "../../Models/User.js";

const ChangeEmailController=async(req,res)=>{

    try {
        const {email}=req.body;
        if(!email){
            return res.status(400).json({message:"email is not found "});
        }
        const user=req.user;
        user.email=email;
      await  user.save();
        return res.status(200).json({message:"Email Updated"});
    } catch (error) {
        return res .status(500).json({message:"error in email change controller ",error});
    }
}
export default ChangeEmailController;

