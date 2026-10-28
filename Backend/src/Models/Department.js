import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,

      unique: true,
    },

    departmentCode: {
      type: String,
    },

    description: {
      type: String,
    },

    manager: {
      type:[ mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: null,
    },
    managerName:{
      type:"String",
      ref:"User",
      default:"Not Assigned"
    }
  },
  { timestamps: true },
);
const Department = mongoose.model("Department", departmentSchema);
export default Department;
