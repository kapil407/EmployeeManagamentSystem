import User from "../../Models/User.js";

const GetAllEmployee = async (req, res) => {
  try {
        const AllProfile=await User.find().select("-password");
        console.log("All Users");
        return res.status(200).json({message:"All Users",AllProfile,success:true});
  }     
  catch (error) {
    console.error("GetAllprofile error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};
export default GetAllEmployee;
