import Leave from "../../Models/Leave.js";
import User from "../../Models/User.js";

const ApplyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, totalDays, reason } = req.body;

    if (!leaveType || !startDate || !endDate || !totalDays || !reason) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const managerId = req.user._id;

    const Admin=await User.findOne({role:"ADMIN"});
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
        success: false,
      });
    }


    const newApply = new Leave({
      employee: managerId,
      admin:Admin._id,
      leaveType,
      startDate,
      endDate,
      totalDays,
      reason,
      status: "PENDING",
    });
    await newApply.save();
    return res.status(201).json({
      message: "Leave applied successfully",
      success: true,
      newApply,
    });
  } catch (error) {
    console.log("Apply Leave Error:", error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export default ApplyLeave;