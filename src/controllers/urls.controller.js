import { Url } from "../models/urls.schema.js";
import { shortUrlGenerator } from "../utils/shorturlGenerator.js";

const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }
    const shortUrl = shortUrlGenerator();
    const newUrl = new Url({ url, shortUrl });
    await newUrl.save();
  } catch (error) {
    console.log(error);
  }
};
export { createShortUrl };
