import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailer = async (sender, text, name, projectDescription, budget) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      Port: 587,

      secure: false,
      auth: {
        user: api,
        pass: b22ddcf218b53949c275e4777f5f1a33,
        // user: process.env.AUTH_EMAIL,
        // pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: sender,
      to: "chyke.ghoul@gmail.com",
      subject: `Email from ${name}`,
      text: `Project Description: ${projectDescription}\n\nBudget: $${budget}\n\n${text}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export default mailer;
