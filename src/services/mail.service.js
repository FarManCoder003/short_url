import nodemailer from "nodemailer";
import { MAILER_EMAIL, MAILER_PASSWORD } from "../constants.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PASSWORD,
  },
});

export async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: '"short_url 👻" <codingfarman01@gmail.com>',
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}
