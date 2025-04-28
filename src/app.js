import e from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = e();
app.use(e.json({ limit: "1mb" }));
app.use(e.urlencoded({ limit: "1mb", extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import userRoute from "./routes/users.route.js";
app.use("/api/v1", userRoute);

app.get("/", (_, res) => {
  return res.send("server is running");
});
app.all("\\*", (_, res) => {
  return res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
export { app };
