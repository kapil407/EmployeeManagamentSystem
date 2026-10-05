import mongoose from "mongoose";
import validator from 'validator'
// import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
      default: () => `USR-${Date.now()}`
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
      address: {
  street: String,
  city: String,
  state: String,
  pincode: String,
  country: String
},
  gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },
        dateOfBirth: {
      type: Date,
    },
  employmentType: {
      type: String,
      enum: ["FULL_TIME", "PART_TIME", "INTERN", "CONTRACT"],
      default: "FULL_TIME",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate:{
        validator:value=>validator.isEmail(value),
         message: "Please enter a valid email address"
      }
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    profilePicture: {
      type: String,
    },

    role: {
      type: String,
      enum: ["ADMIN", "MANAGER", "EMPLOYEE"],
      default: "EMPLOYEE",
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    designation: {
      type: String,
    },

    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    joiningDate: {
      type: Date,
    },

    salary: {
      type: Number,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    refreshTokens: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;