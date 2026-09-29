import User from "../../Models/User.js";

const GetAllManager = async (req, res) => {
  try {
        const AllProfile=await User.find({
           role:"MANAGER"
        }).select("-password");
        console.log("All Users");
        return res.status(200).json({message:"All Managers",AllProfile,success:true});
  }     
  catch (error) {
    console.error("GetAllprofile of Manager error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};
export default GetAllManager;
