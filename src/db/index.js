import mongoose from "mongoose";
import { MONGODB_URI } from "../constants.js";
const connectDb = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export { connectDb };
