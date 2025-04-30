import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import { JWT_SECRET } from "../constants.js";
import { User } from "../models/users.schema.js";
import { sendMail } from "../services/mail.service.js";
import { mailVerification } from "../templates/mail/emailVerification.template.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createUser = async (req, res) => {
  try {
    const { displayname, email, password } = req.body;
    if ([displayname, email, password].some((value) => !value?.trim())) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      displayname,
      email,
      password: hashedPassword,
    });
    const user = await User.findOne({ email }).select(
      "-password -_id -createdAt -updatedAt -__v"
    );
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });
    await sendMail(email, "Email Verification", "", mailVerification(token));
    return res.render("login");
  } catch (error) {
    console.log(error);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }
    if (user.emailVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }
    user.emailVerified = true;
    await user.save();
    return res
      .status(200)
      .sendFile(path.join(__dirname, "..", "views", "mailVerified.html"));
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    if (Object.values(req.body).some((value) => !value?.trim())) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "credentials are incorrect" });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "credentials are incorrect" });
    }
    if (!user.emailVerified) {
      return res.status(400).json({ message: "Email not verified" });
    }
    const loginUser = await User.findOne({ email: req.body.email }).select(
      "-password -_id -createdAt -updatedAt -__v"
    );
    return res.status(200).json({ message: "Login successful", loginUser });
  } catch (error) {
    console.log(error);
  }
};

const registerView = async (req, res) => {
  return res.render("register");
};

const loginView = async (req, res) => {
  return res.render("login");
};

export { createUser, loginUser, loginView, registerView, verifyEmail };

