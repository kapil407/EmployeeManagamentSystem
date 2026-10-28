import Department from "../../Models/Department.js";
import User from "../../Models/User.js";

// create Department

export const createDepartmentController = async (req, res) => {
  try {
    const { departmentName, DepartmentCode, description } = req.body;
    console.log(departmentName, DepartmentCode, description);

    if (!departmentName || !DepartmentCode || !description) {
      return res.json(403).json({ message: "all fields are required " });
    }

    const newDepartment = new Department({
      departmentName,
      departmentCode: DepartmentCode,
      description,
    });
    await newDepartment.save();
    console.log(newDepartment);

    return res
      .status(200)
      .json({ message: "create department ", success: true, newDepartment });
  } catch (error) {
    console.error("error in create dept ", error);
    return res
      .status(500)
      .json({ message: "error in create department ", error, success: false });
  }
};

// update dept

export const updateDepartmentController = async (req, res) => {
  try {
    const { departmentName, departmentCode, description, manager } = req.body;

    const managerData= await User.findOne({
      name: manager.split(" ")[0],
      lastName: manager.split(" ")[1],
      role: "MANAGER",
    });
    console.log(
      "managerdata ->>>",
     
      managerData,
    );
    const dept = await Department.findById(req.params.id);
    console.log("dept ", dept);

    const updateDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      {
        departmentName: departmentName || dept.departmentName,
        departmentCode: departmentCode || dept.departmentCode,
        description: description || dept.description,
        manager: managerData._id,
        managerName:manager
      },
      {
        new: true,
        runValidators: true,
      },
    );
   

    const department = {
      ...updateDepartment.toObject(),
      manager: managerData,
    };

    return res
      .status(200)
      .json({ message: "update dept ", success: true, department });
  } catch (error) {
    console.log("error in update dept", error);
    return res
      .status(500)
      .json({ message: "error in update dept", error, success: false });
  }
};

// get all department

export const getAllDepartmentController = async (req, res) => {
  try {
    const getAllDepartment = await Department.find();
    return res.status(200).json({
      message: "get all department ",
      getAllDepartment,
      success: true,
    });
  } catch (error) {
    console.error("error in getall dept ", error);
    return res
      .status(500)
      .json({ message: "error in det all department ", error, success: false });
  }
};

// delete department

export const deleteDepartmentController = async (req, res) => {
  try {
    const deleteDepartment = await Department.findByIdAndDelete(req.params.id, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ message: "delete department ", deleteDepartment, success: true });
  } catch (error) {
    console.log("error in delete department ", error);
    return res
      .status(500)
      .json({ message: "error in delete department ", error, success: false });
  }
};

export const GetDepartmentById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id->>> ", id);
    if (!id) {
      return res.status(400).json({ message: "id is not found" });
    }
    const departmentData = await Department.findById(id);
    const managerId = departmentData.manager;
    const managerData = await User.findById(managerId);
    if (!departmentData) {
      return res.status(400).json({ message: "no department found" });
    }
    console.log("dept in backend ", departmentData);
    return res
      .status(200)
      .json({
        message: "fetched data",
        departmentData,
        managerData,
        success: true,
      });
  } catch (error) {}
};
