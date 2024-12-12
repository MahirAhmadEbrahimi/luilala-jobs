import express from "express";
const router = express.Router();

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  findUserByID,
  deleteUserByID,
  updateUserById,
  uploadUserPhoto,
  resizeUserPhoto,
  updateUserPhoto,
  applyJob,
  addFavoriteJob,
  getFavoriteJobs,
  countUsers,
} from "../controllers/userController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/countUsers").get(countUsers);

router.route("/").get(authenticate, authorizeAdmin, getAllUsers);
router.route("/register").post(createUser);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutCurrentUser);

// Get all favorite jobs
router.route("/getFavorites").get(authenticate, getFavoriteJobs);

// Add job to favorites
router.route("/addFavorites").post(authenticate, addFavoriteJob);

router.patch(
  "/updateMe",
  authenticate,
  uploadUserPhoto,
  resizeUserPhoto,
  updateUserPhoto
);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .patch(authenticate, updateCurrentUserProfile);

router
  .route("/:id")
  .get(authenticate, authorizeAdmin, findUserByID)
  .patch(authenticate, authorizeAdmin, updateUserById)
  .delete(authenticate, authorizeAdmin, deleteUserByID);

export default router;
