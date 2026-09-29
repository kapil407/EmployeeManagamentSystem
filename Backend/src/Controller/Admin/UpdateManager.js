import User from "../../Models/User";

const UpdateManager=async(req,res)=>{
    try {
        const UpdateManager=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                runValidators:true,
                new:true
            }
        )
    } catch (error) {
        console.error("error in update manager",error);
        return res.status(500).json({message:"error in update manager ",error});
    }
}
export default UpdateManager;