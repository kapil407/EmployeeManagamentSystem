import User from "../../Models/User.js";

const getMyTeam=async(req,res)=>{
    try {
        const id=req.user._id;
        console.log("id",id)
        const teamMembers= await User.find({role:"EMPLOYEE", manager:id});
        if(!teamMembers){
           return res.status(200).json({message:"",success:true}) 
        }
         return res.status(200).json({message:"",success:true,teamMembers}) 
    } catch (error) {
        console.log("error",error);
    }
}
export default getMyTeam
