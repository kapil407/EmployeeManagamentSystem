import Leave from "../../Models/Leave.js";

const GetAllLeave = async (req, res) => {
  try {
    const id = req.user._id;
    const AllLeave = await Leave.find({ employee: id });

    return res.status(200).json({ message: "All leave ", AllLeave });
  } catch (error) {
    console.log("error",error);
  }
};

export default GetAllLeave;
