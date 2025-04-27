import e from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import userRoute from "./routes/users.route.js";
app.use("/api/v1", userRoute);

app.get("/", (_, res) => {
  return res.send("server is running");
});
app.use((_, res) => {
  return res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});
export { app };
