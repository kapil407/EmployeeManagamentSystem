import User from "../../Models/User.js";
import bcrypt, { hash } from "bcrypt";
import Department from "../../Models/Department.js";
export const createEmpController = async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      password,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      manager,
      gender,
    } = req.body;
    console.log(
     
      name,
      lastName,
      email,
      password,
      phone,
      department,
      designation,
      joiningDate,
      salary,
      manager,
      gender,
    );
    console.log(manager.split(" ")[0], manager.split(" ")[1])
    const Manager = await User.findOne({
     name:manager.split(" ")[0],lastName:manager.split(" ")[1],
      role: "MANAGER",
    });
    console.log("Manager",Manager)
    if (!Manager) {
      return res.status(404).json({
        success: false,
        message: "manager not found",
      });
    }

    const departmentData = await Department.findOne({
      departmentName:department
    });
console.log("dept ",departmentData);
    if (!departmentData) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password:hashedPassword,
      phone,
      designation,
      joiningDate,
      salary,
      gender,
      manager: Manager._id,
      department: departmentData._id,
      departmentName:department,
      managerName:manager
    });
    await newUser.save();
    return res.status(200).json({
      message: "Create Employee successfully",
      success: true,
      newUser 
    });
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

    return res.status(200).json({
      message: "Emp deleted successfully",
      success: true,
      deletedUser,
    });
  } catch (error) {
    console.error("error in delete controller", error);
    return res
      .status(500)
      .json({ message: "error in delete controller", error });
  }
};

export const getAllEmployee = async (req, res) => {
  try {
    const AllProfile = await User.find({role:"EMPLOYEE"}).select("-password");
    console.log("All Users");
    return res
      .status(200)
      .json({ message: "All Users", AllProfile, success: true });
  } catch (error) {
    console.error("GetAllprofile error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};

export const updateEmpController = async (req, res) => {
  try {
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ message: "update Emp successfully", success: true, newUser });
  } catch (error) {
    console.error("error in update controller", error);
    res.status(500).json({ message: "error in update controller", error });
  }
};
 export const GetEmpByIdController=async(req,res)=>{
  try {
    const {id}=req.params;
      const emp=await User.findById(id);
      if(!emp){
        return res.status(400).json({message:"emp not found "});
      }
      return res.status(200).json({emp,success:true});
    
  } catch (error) {
    console.log("error in getemp by id in backend ",error)
  }
}
