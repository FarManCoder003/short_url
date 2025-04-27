import { model } from "mongoose";
const userSchema = new Schema(
  {
    displayname: {
      type: String,
      required: [true, "displayname is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

export const User = model("User", userSchema);
