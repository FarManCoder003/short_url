import e from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getShortUrl } from "./controllers/urls.controller.js";
import urlRoute from "./routes/urls.route.js";
import userRoute from "./routes/users.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = e();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(e.json({ limit: "1mb" }));
app.use(e.urlencoded({ limit: "1mb", extended: true }));

app.use("/api/v1", userRoute);
app.use("/api/v1", urlRoute);

app.get("/", getShortUrl);

app.all("\\*", (_, res) => {
  return res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
export { app };
