import User from "../Models/User.js";
import bcrypt, { hash } from 'bcrypt';
const CreateEmpController=async (req,res)=>{
    try {
        const {firstName,lastName,emailId,password,backgroundImage,profileImage}=req.body;
       const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            firstName,
            lastName,
            emailId,
            password:hashedPassword,
            backgroundImage,
            profileImage
        })
        await newUser.save();
        return res.status(200).json({message:"Create Employee successfully",newUser});

    } catch (error) {
        console.log("error in create Emp controller",error);
        return res.status(500).json({message:"error in Create Emp controller",error});
    }
}
export default CreateEmpController ;