import express from 'express';
import mailController from './mail.controller.js';
import validator from './validator.js';
import Schema from './mail.validator.js';
const mailRouter = express.Router();

mailRouter.post("/mail",validator(Schema),mailController.sendMail);

export default mailRouter;