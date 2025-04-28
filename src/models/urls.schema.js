import { Schema, model } from "mongoose"

const urlSchema = new Schema(
  {
    mainUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Url = model("Url", urlSchema);