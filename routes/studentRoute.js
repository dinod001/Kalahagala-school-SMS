import express from "express";
import {
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getAllStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// routes
router.post("/add", addStudent);       // Add new student
router.put("/update/:id", updateStudent); // Update student by ID
router.delete("/delete/:id", deleteStudent); // Delete student by ID
router.get("/get/:id", getStudent);    // Get student by ID
router.get("/get-all", getAllStudent);     // Get all students

export default router;
