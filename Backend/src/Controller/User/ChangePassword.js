import User from "../../Models/User.js";
import bcrypt from 'bcrypt'
const changePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: "no passwors found" });
    }

    const user = req.user;
    const hashedPassword=bcrypt.hash(newPassword,10);
    user.password = hashedPassword;
    await user.save();
    return res
      .status(200)
      .json({ message: "password update successfully", user });
  } catch (error) {
    console.log("error in change password", error);
    return res.status(500).json({ message: "error in update password", error });
  }
};
export default changePassword;
