import User from "../../Models/User.js"
const updateMyProfileController=async(req,res)=>{
    try {
      const updateMyProfile=await User.findByIdAndUpdate(req.user.userId,req.user.userId,{
        new:true,
        runValidators:true
      });
      await updateMyProfile.save();
      return res.status(200).json({message:"profile updated",updateMyProfile});

    } catch (error) {
        console.log("error in updateMyProfileController",error);
        return res.status(200).json({message:"error in update my Profile Controller",error});
    }
}
export default updateMyProfileController ;

