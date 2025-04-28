import bcrypt from "bcryptjs";
import { User } from "../models/users.schema.js";
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
    const user = await User.create({
      displayname,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created successfully", user });
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
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, loginUser };
