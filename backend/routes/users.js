import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

import { adminAuth, userAuth } from "../utils/verifyToken.js";

// update  user
router.put("/:id", userAuth, updateUser);

// delete user
router.delete("/:id", userAuth, deleteUser);

// get single user
router.get("/:id", userAuth, getSingleUser);

// get all users
router.get("/", userAuth, getAllUser);

export default router;
