import User from "../../Models/User.js";

const DeleteManager=async(req,res)=>{
        try {
            const {id}=params.id;
           const deleteManager= await User.findByIdAndDelete({_id:id});
            return res.status(200).json({message:"delete manager ",success:true});
        } catch (error) {
            console.error("error in delete manager",error)
             return res.status(500).json({message:" error in delete manager ",error});
        }
}
export default DeleteManager;