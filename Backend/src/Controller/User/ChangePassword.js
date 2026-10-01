import User from "../../Models/User.js";
import bcrypt from 'bcrypt'

const changePasswordController = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: "password is empty" });
    }
    const user = req.user;
    const hashedPassword=await bcrypt.hash(password,10);
    user.password = hashedPassword;
    await user.save();
    return res
      .status(200)
      .json({ message: "password update successfully", user,success:true });
  } catch (error) {
    console.log("error in change password", error);
    return res.status(500).json({ message: "error in update password", error,success:false });
  }
};
export default changePasswordController;
