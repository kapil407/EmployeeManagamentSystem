import User from "../../Models/User.js";

const getTeamMemberProfile=async(req,res)=>{
        try {
            const {id}=req.params;
            console.log("id",id)
            const profileData=await User.findById({_id:id});
            console.log("dta",profileData)
            if(!profileData){
                return res.status(400).json({message:"not profile data found ",success:false})
            }
            return res.status(200).json({profileData,success:true})
        } catch (error) {
            console.log("error",error)
             return res.status(500).json({message:"error n profile data",success:false})
        }
}
export default getTeamMemberProfile;