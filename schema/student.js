import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    auto: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
    trim: true,
  },
  parentNIC: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;
