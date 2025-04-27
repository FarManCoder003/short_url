import e from "express";
import { createUser } from "../controllers/users.controller.js";
const router = e.Router();
router.route("/").post(createUser);
export default router;