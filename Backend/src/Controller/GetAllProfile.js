import User from "../Models/User.js";
const GetAllProfile = async (req, res) => {
  try {
        const AllProfile=await User.find().select("-password");
        console.log("All Users");
        return res.status(200).json({message:"All Users",AllProfile});
  }     
  catch (error) {
    console.log("profile error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};
export default GetAllProfile;
