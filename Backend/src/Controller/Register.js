import User from '../Models/User.js'
import bcrypt, { hash } from 'bcrypt';
import uploadFile from './Cloudinary.js';
export const registerController=async(req,res)=>{
    try {   
        const {firstName,lastName,emailId,password,profileImage,backgroundImage}=req.body;
        console.log("auth");
            if(!firstName || !lastName || !emailId || !password || ! profileImage || !backgroundImage){
                return res.status(500).json({message:"all fields are required "});
            }
            const hashedPassword= await bcrypt.hash(password,10);
            const newProfileImage = await uploadFile(profileImage);
            const newBackgroundImage = await uploadFile(backgroundImage);
            const newUser=new User({
                firstName,
                lastName,
                emailId,
                password:hashedPassword,
                profileImage:newProfileImage,
                backgroundImage:newBackgroundImage,
              

            })
            await newUser.save();
            console.log("new User",newUser);
            return res.status(200).json({message:"register successful",user:newUser,succes:true});

    } catch (error) {
        console.log("register error",error);
        return res.status(500).json({message:"register error",error});
    }
}