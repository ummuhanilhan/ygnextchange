import * as Joi from 'joi';

export const signinSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(32).required(),
  remember: Joi.boolean().optional(),
});

export const signupSchema = Joi.object({
  name: Joi.string(),
  slug: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().min(8).max(32).required().required(),
  confirm: Joi.string().required(),
  contact: Joi.object({
  phone: Joi.string().min(6).max(13).required().messages({
    'string.empty': '{{#label} boş bırakılamaz',

  }),
  }),
  type: Joi.boolean(),
  aggrement: Joi.object({
    terms: Joi.boolean().required(),
    kvkk: Joi.boolean().required(),
    campaign: Joi.boolean().required(),
  }),
}).required();

export const forgottenSchema = Joi.object({
  email: Joi.string().required(),
});

export const resetSchema = Joi.object({
    password: Joi.string().min(8).max(32).required(),
    confirm: Joi.string().required(),
})