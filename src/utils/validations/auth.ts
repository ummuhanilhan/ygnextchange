import * as Joi from 'joi';

export const signinSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(32).required(),
  remember: Joi.boolean().optional(),
});

export const signupSchema = Joi.object({
  fullname: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(8).max(32).required().required(),
  confirm: Joi.string().required(),
  phone: Joi.string().min(7).max(13).required(),
  type: Joi.boolean(),
}).required();

export const forgottenSchema = Joi.object({
  email: Joi.string().required(),
});

export const resetSchema = Joi.object({
    password: Joi.string().min(8).max(32).required(),
    confirm: Joi.string().required(),
})