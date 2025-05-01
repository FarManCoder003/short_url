import { Url } from "../models/urls.schema.js";
import { shortUrlGenerator } from "../utils/shorturlGenerator.js";

const createShortUrl = async (req, res) => {
  try {
    const { url, user } = req.body;
    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }
    const shortUrl = shortUrlGenerator();
    const newUrl = new Url({ url, shortUrl, user });
    await newUrl.save();
    return res.redirect("/?id=" + user);
  } catch (error) {
    console.log(error);
  }
};
const getShortUrl = async (req, res) => {
  const { id } = req.query;
  const urls = await Url.find({ user: id }).select(
    "-__v -user -_id -createdAt -updatedAt"
  );
  return res.render("index", { urls });
};
const redirectShortUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const { url } = await Url.findOne({ shortUrl });
  return res.redirect(url);
};
export { createShortUrl, getShortUrl, redirectShortUrl };
