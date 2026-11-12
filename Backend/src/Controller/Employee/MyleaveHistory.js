import Leave from "../../Models/Leave.js";

const GetLeavehistory = async (req, res) => {
  try {
    const id = req.user._id;
    const AllLeave = await Leave.find({ employee: id });
    if (!AllLeave) {
      return res.status(200).json({ message: "No leave applied" });
    }
    return res.status(200).json({ message: "All applied leave ", AllLeave ,success:true});
  } catch (error) {
    console.log("error ", error);
  }
};
export default GetLeavehistory;

