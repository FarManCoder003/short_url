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
    return res.status(200).json({ shortUrl });
  } catch (error) {
    console.log(error);
  }
};
export { createShortUrl };
