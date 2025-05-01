import e from "express";
import { createShortUrl } from "../controllers/urls.controller.js";

const router = e.Router();
router.route("/urls").post(createShortUrl);
export default router;
