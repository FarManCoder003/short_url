import e from "express";
import {
  createShortUrl,
  redirectShortUrl,
} from "../controllers/urls.controller.js";

const router = e.Router();
router.route("/users/urls").post(createShortUrl);
router.route("/users/urls/:shortUrl").get(redirectShortUrl);
export default router;
