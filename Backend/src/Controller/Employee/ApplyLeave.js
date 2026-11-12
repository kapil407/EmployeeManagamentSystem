import Leave from "../../Models/Leave.js";
import User from "../../Models/User.js";

export const ApplyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, totalDays, reason } = req.body;

    if (!leaveType || !startDate || !endDate || !totalDays || !reason) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const employeeId = req.user._id;

    // Find employee and associated manager
    const employee = await User.findById(employeeId);
      console.log("pictre",employee.profilePicture)
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
        success: false,
      });
    }

    if (!employee.manager){
      return res.status(400).json({
        message: "No manager assigned to this employee",
        success: false,
      });
    }

    const newApply = new Leave({
      employee: employeeId,
      manager: employee.manager,
      name:employee.name+" "+employee.lastName,
      leaveType,
      startDate,
      endDate,
      totalDays,
      reason,
      profilePicture:employee.profilePicture,
      status: "Pending",
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
