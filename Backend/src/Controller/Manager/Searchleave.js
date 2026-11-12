import Leave from "../../Models/Leave.js";

const SearchLeaveController = async (req, res) => {
  try {
    const { value } = req.body;
    console.log("value ",value)
    const FilterLeave = await Leave.find({

      name: { $regex: value, $options: "i" },
    });
    if(!FilterLeave){
        return res.status(200).json({message:"no leave request",success:true})
    }
     return res.status(200).json({success:true,FilterLeave})

  } catch (error) {
    console.error("error in search leave controller", error);
    res.status(500).json({ message: "error", error });
  }
};
export default SearchLeaveController