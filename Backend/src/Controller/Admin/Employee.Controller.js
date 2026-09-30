import User from "../../Models/User";
import bcrypt, { hash } from "bcrypt";
 export const createEmpController = async (req, res) => {
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
      manager,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      manager,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ message: "Create Employee successfully",success:true, newUser });
  } catch (error) {
    console.error("error in create Emp controller", error);
    return res
      .status(500)
      .json({ message: "error in Create Emp controller", error });
  }
};



export const deleteEmpController = async (req, res) => {
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
 


export const getAllEmployee = async (req, res) => {
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


export const updateEmpController=async(req,res)=>{
    try {
        const newUser=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
             new:true,
             runValidators:true   
        })
        await newUser.save();
        return res.status(200).json({message:"update Emp successfully",success:true, newUser});

    } catch (error) {
        console.error("error in update controller",error);
        res.status(500).json({message:"error in update controller",error});
    }
}


