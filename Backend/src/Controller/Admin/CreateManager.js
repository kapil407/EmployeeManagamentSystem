import User from "../../Models/User.js";
const CreateManagerController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      role,
    } = req.body;
    if(!name ||!email ||!password ||!phone ||!department ||!designation ||!joiningDate ||!salary||!role){
    return res.status(403).json({message:"all fields are required"});
}
    const NewManager = new User({
      name,
      email,
      password,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      role: "MANAGER",
    });
     return res.status(200).json({message:"manager create sucessfully ",success:true,NewManager});

  } catch (error) {
    console.error("error in create manager",error);
     return res.status(500).json({message:"error manager create  ",error});
  }
};
export default CreateManagerController;
