import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  host: "smtp-relay.brevo.com",
  port: 587,
  // port: 465,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default transporter;
