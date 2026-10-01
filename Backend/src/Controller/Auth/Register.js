import User from "../../Models/User.js";
import bcrypt, { hash } from "bcrypt";
import uploadFile from "../Cloudinary.js";
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("auth");
    if (!name || !email || !password) {
      return res.status(500).json({ message: "all fields are required " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const employeeId=`${Date.now()}`;
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("new User", newUser);
    return res
      .status(200)
      .json({ message: "register successful", user: newUser, succes: true });
  } catch (error) {
    console.log("register error", error);
    return res.status(500).json({ message: "register error", error ,succes:false});
  }
};
