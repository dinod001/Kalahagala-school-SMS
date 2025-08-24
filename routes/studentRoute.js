import express from "express";
import {
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getAllStudent,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

// routes
studentRouter.post("/add", addStudent);       // Add new student
studentRouter.put("/update/:id", updateStudent); // Update student by ID
studentRouter.delete("/delete/:id", deleteStudent); // Delete student by ID
studentRouter.get("/get/:id", getStudent);    // Get student by ID
studentRouter.get("/get-all", getAllStudent);     // Get all students

export default studentRouter;
