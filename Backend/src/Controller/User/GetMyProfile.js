import User from "../../Models/User.js";
const getMyProfileController=async(req,res)=>{
    try {
        const {id} =req.params;
        const user=await User.findById(id);
        if(!user){
            return res.status(400).json({message:"User not found",success:false});
        }   
        return res.status(200).json({message:"profile fetch successfully",user});

    } catch (error) {   
        console.log("error in profile fetch");

         return res.status(500).json({message:"error in fetch profile",success:false});
    }
}
export default getMyProfileController ;