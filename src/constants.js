const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL;
const MONGODB_URI = process.env.MONGODB_URI;
const MAILER_EMAIL = process.env.MAILER_EMAIL;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

export {
  APP_URL,
  JWT_SECRET,
  MAILER_EMAIL,
  MAILER_PASSWORD,
  MONGODB_URI,
  PORT,
};
