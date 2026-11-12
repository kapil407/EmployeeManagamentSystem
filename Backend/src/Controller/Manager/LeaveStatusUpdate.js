import Leave from "../../Models/Leave.js";

const UpdateLeaveStatus = async (req, res) => {
  try {
    const {id, status } = req.body;
    console.log("kapil",id,status)

    const LeaveData = await Leave.findById({ _id: id });
    LeaveData.status = status;
    await LeaveData.save();
    return res.status(200).json({message:"status is changed",LeaveData,success:true})
  } catch (error) {
    console.log("error ",error);
    return res.status(500).json({message:"error in status",success:false})
  }
};
export default UpdateLeaveStatus;
