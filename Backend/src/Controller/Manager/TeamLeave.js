import Leave from "../../Models/Leave.js";


const GetTeamLeave=async(req,res)=>{
    try {
        const id=req?.user?._id;
        console.log("id",id)
       const EmployeeLeave = await Leave.find({ manager: id })
  .sort({ createdAt: -1 });
        if(!EmployeeLeave){
            return res.status(200).json({message:"No leave request available "});
        }
        console.log("employee Leave ",EmployeeLeave);
        return res.status(200).json({message:"All leave request ",EmployeeLeave,success:true})

        
    } catch (error) {
        console.log("error",error)
         return res.status(500).json({message:"All leave request ",succes:false})
    }
}
export default GetTeamLeave;