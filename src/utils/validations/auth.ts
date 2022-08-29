import { object, string, number, date, InferType, boolean } from 'yup';

export const signinSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(32).required(),
  rememberme: boolean(),
});


export const signupSchema = object({
  fullname: string().required(),
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(32).required(),
  confirm: string(),
  phone: string(),
  type: boolean(),
});
