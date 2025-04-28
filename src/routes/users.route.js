import e from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";
const router = e.Router();
router.route("/users").post(createUser);
router.route("/users/login").post(loginUser);
export default router;