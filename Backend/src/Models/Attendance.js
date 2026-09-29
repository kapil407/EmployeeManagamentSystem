import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  checkIn: Date,

  checkOut: Date,

  workingHours: Number,

  status: {
    type: String,
    enum: ["PRESENT", "ABSENT", "HALF_DAY", "LATE"]
  }
});
const Attendence=mongoose.model("Attendence",attendanceSchema);
export default Attendence;