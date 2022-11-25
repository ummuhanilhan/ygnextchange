import * as Joi from 'joi';

export const vehicleSchema = Joi.object({
  accept: Joi.boolean(),
  brand: Joi.string(),
  model: Joi.string(),
  year: Joi.any(),
  model_year: Joi.any(),
  plate: Joi.string(),
  type: Joi.string(),
  features: Joi.array(),
  options: Joi.array(),
  k1_file: Joi.string(),
  insurance_date: Joi.any(),
  examination_date: Joi.any(),
  casco_date: Joi.any(),
});











