/** @format */

import express from "express";
import {
  deleteGoal,
  getGoals,
  setGoal,
  updateGoal,
} from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

export default router;
