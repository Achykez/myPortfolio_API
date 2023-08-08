import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailer = async (sender, text, name, projectDescription, budget) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      Port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {     
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: sender,
      to: "chyke.ghoul@gmail.com",
      subject: `Email from ${name}`,
      text: `Project Description: ${projectDescription}\n\nBudget: $${budget}\n\n${text}`,
      html: `<b>${projectDescription}</b>`
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export default mailer;
