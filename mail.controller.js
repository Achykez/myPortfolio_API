import mailer from "./mail.config.js";

class MailController {
  async sendMail(req, res) {
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.email;
    const projectDescription = req.body.projectDescription;
    const budget = req.body.budget;
    
    try {
      await mailer(email, message, name, projectDescription, budget); // Await the mailer function
      return res.status(200).send({
        success: true,
        message: "Mail sent successfully",
      });
    } catch (err) {
      return res.status(400).send({
        success: false,
        error: err.message,
      });
    }
  }
}

export default new MailController();
