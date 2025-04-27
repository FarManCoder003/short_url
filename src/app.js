import e from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = e();
app.use(e.json({ limit: "1mb" }));
app.use(e.urlencoded({ limit: "1mb", extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (_, res) => {
  return res.send("server is running");
});
app.use((_, res) => {
  return res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});
export { app };
