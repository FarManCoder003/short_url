import { app } from "./src/app.js";
import { APP_URL, PORT } from "./src/constants.js";
import { connectDb } from "./src/db/index.js";
app.listen(PORT, () => {
  console.log(`Server is running on port ${APP_URL}:${PORT}`);
  connectDb();
});
