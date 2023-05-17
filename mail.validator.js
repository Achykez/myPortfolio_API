import Joi from "joi";

const Schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .required(),
  name: Joi.string().required(),
  message: Joi.string().required(),
  projectDescription: Joi.string().required(),
  budget: Joi.number().required()
});

export default Schema;
