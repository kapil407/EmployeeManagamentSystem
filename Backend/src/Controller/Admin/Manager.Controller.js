import Department from "../../Models/Department.js";
import User from "../../Models/User.js";
import bcrypt, { hash } from "bcrypt";
export const createManagerController = async (req, res) => {
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
      role,
    } = req.body;
    console.log(
      name,
      lastName,
      designation,
      role,
      email,
      password,
      phone,
      department,
    );
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !department ||
      !designation ||
      !joiningDate ||
      !salary ||
      !role ||
      !lastName
    ) {
      return res.status(403).json({ message: "all fields are required" });
    }

    const isExistEmail=await User.findOne({email});
    if(isExistEmail){
      return res.status(400).json({message:"This email is already exist"})
    }

    const departmentData = await Department.findOne({ departmentName: department });
   

    const hashedPasword = await bcrypt.hash(password, 10);
    const NewManager = new User({
      name,
      lastName,
      email,
      password: hashedPasword,
      phone,
      department: departmentData._id,
      departmentName:department,
      designation,
      joiningDate,
      salary,
      role: "MANAGER",
    });

    await NewManager.save();
    
    const managers = {
      ...NewManager.toObject(),
      department:departmentData,
    };

    return res.status(200).json({
      success: true,
      message: "manager create sucessfully ",
      managers,
    });
  } catch (error) {
    console.error("error in create manager", error);
    return res.status(500).json({ message: "error manager create  ", error });
  }
};

export const updateManager = async (req, res) => {
  try {
    const { id } = req.params;
    const { designation, department, salary, address, joiningDate } = req.body;
    const manager = await User.findById(id);

    const Dept = await Department.findOne({ departmentName: department });
    console.log("dept", Dept);
    const UpdateManagerData = await User.findByIdAndUpdate(
      { _id: id, role: "MANAGER" },
      {
        designation: designation || manager.designation,
        department: Dept || manager.department,
        salary: salary || manager.salary,
        address: address || manager.address,
        joiningDate: joiningDate || manager.joiningDate,
      },
      { new: true, runValidators: true },
    );
    const departmentData = await department.findById(Dept);
    const UpdateManager = {
      ...UpdateManagerData.toObject(),
      departmentData,
    };
    return res.status(200).json({
      message: "manager update sucessfully ",
      success: true,
      UpdateManager,
    });
  } catch (error) {
    console.error("error in update manager", error);
    return res.status(500).json({ message: "error in update manager ", error });
  }
};

export const getAllManager = async (req, res) => {
  try {
    const AllProfile = await User.find({
      role: "MANAGER",
    }).select("-password");
    console.log("All Users");

    return res
      .status(200)
      .json({ message: "All Managers", AllProfile, success: true });
  } catch (error) {
    console.error("GetAllprofile of Manager error ", error);
    return res.status(500).json({ message: "profile error ", error });
  }
};

export const deleteManager = async (req, res) => {
  try {
    const { id } = req.params;
    const managerData = await User.findById(id);

    if (!managerData) {
      return res.status(400).json({ message: "manager not found" });
    }

    const deptId = managerData.department;
    const departmentData = await Department.findByIdAndUpdate(
      deptId,
      { $set: { manager: null } },
      { new: true },
    );
    const deleteManager = await User.findByIdAndDelete(
      { _id: id },
      {
        new: true,
      },
    );
    return res.status(200).json({ message: "delete manager ", success: true });
  } catch (error) {
    console.error("error in delete manager", error);
    return res
      .status(500)
      .json({ message: " error in delete manager ", error });
  }
};

export const GetManagerById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Id is not found" });
    }
    const manager = await User.findById(id);
    if (!manager) {
      return res.status(400).json({ message: "managers is not found " });
    }
    return res.status(200).json({ success: true, manager });
  } catch (error) {
    return res.status(500).json({ message: "error in get manager  ", error });
  }
};
