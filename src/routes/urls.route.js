import e from "express";
import {
  createShortUrl,
  deleteShortUrl,
  redirectShortUrl,
} from "../controllers/urls.controller.js";

const router = e.Router();
router.route("/users/urls").post(createShortUrl);
router.route("/users/urls/:shortUrl").get(redirectShortUrl);
router.route("/users/urls/delete").post(deleteShortUrl);
export default router;
