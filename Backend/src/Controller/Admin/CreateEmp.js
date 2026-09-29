import User from "../../Models/User.js";
import bcrypt, { hash } from "bcrypt";
const CreateEmpController = async (req, res) => {
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
export default CreateEmpController;
