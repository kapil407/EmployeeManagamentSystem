import User from "../../Models/User.js"
const updateMyProfileController=async(req,res)=>{
    try {
      console.log("kapil ")
      const {name,lastName,address,Bio}=req.body;
      console.log(name,lastName,address);
      const userId=req.userId;
      const updateMyProfile=await User.findByIdAndUpdate(userId,req.body,{
        new:true,
        runValidators:true
      });
      await updateMyProfile.save();
    
      return res.status(200).json({message:"profile updated",updateMyProfile,success:true});

    } catch (error) {
        console.log("error in updateMyProfileController",error);
        return res.status(200).json({message:"error in update my Profile Controller",error,success:false});
    }
}
export default updateMyProfileController ;

