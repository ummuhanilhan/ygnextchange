import * as Joi from 'joi';

export const profileSchema = Joi.object({
  fullname: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(), 
  phone: Joi.string().min(7).max(13).required(),
  type: Joi.boolean(),
});
  