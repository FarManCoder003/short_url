import e from "express";
import {
  createUser,
  loginUser,
  verifyEmail,
} from "../controllers/users.controller.js";
const router = e.Router();
router.route("/users").post(createUser);
router.route("/users/login").post(loginUser);
router.route("/users/verify").get(verifyEmail);
export default router;
