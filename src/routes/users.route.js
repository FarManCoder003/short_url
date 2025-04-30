import e from "express";
import {
  createUser,
  loginUser,
  loginView,
  registerView,
  verifyEmail,
} from "../controllers/users.controller.js";
const router = e.Router();
router.route("/users/register").post(createUser).get(registerView);
router.route("/users/login").post(loginUser).get(loginView);
router.route("/users/verify").get(verifyEmail);
export default router;
