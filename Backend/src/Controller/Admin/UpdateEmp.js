import User from "../../Models/User.js";
const updateEmpController=async(req,res)=>{
    try {
        const newUser=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
             new:true,
             runValidators:true   
        })
        await newUser.save();
        return res.status(200).json({message:"update Emp successfully",success:true, newUser});

    } catch (error) {
        console.error("error in update controller",error);
        res.status(500).json({message:"error in update controller",error});
    }
}
export default updateEmpController ;