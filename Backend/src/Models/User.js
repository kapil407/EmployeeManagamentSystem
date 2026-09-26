import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      minlength: [4, "firstName's length can not be less than 4"],
      maxlength: [10, "firstName's length can not be greater than 10"],
    },
    lastName: {
      type: String,
      required: [true, "firstName is required"],
      minlength: [4, "firstName's length can not be less than 4"],
      maxlength: [10, "firstName's length can not be greater than 10"],
    },
    emailId: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password can not be less than 6"],
    },
    role: {
      type: String,
      enum: ["Employee", "Admin"],
      default: "Employee",
    },
    RefreshToken:[{
      token:{
        type:String,
        required:true,
      }
    }],
    profileImage: {
      type: String,
      default: "",
    },
    backgroundImage: {
      type: "String",
      default: "",
    },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model("User", UserSchema);
export default User;
