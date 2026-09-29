import User from "../../Models/User.js";

const deleteController = async (req, res) => {
  try {
   
    const { id } = req.params;
    
    const deletedUser = await User.findByIdAndDelete({ _id: id });

    return res
      .status(200)
      .json({ message: "Emp deleted successfully",success:true, deletedUser });
  }
   catch (error) {
    console.error("error in delete controller", error);
    return res
      .status(500)
      .json({ message: "error in delete controller", error });
  }
};
export default deleteController;  
