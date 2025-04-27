import e from "express";
const app = e();
app.use(e.json({ limit: "1mb" }));
app.use(e.urlencoded({ limit: "1mb", extended: true }));

app.get("/", (_, res) => {
  res.send("server is running");
});
app.use((_, res) => {
  res.send("404 not found");
});
export { app };
