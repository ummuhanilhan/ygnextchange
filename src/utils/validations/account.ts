import { object, string, number, date, boolean } from 'joi';

export const profileSchema = object({
    fullname: string().required(),
    name: string().required(),
    email: string().email().required(),
    phone: string().min(7).max(13).required(),
    type: boolean(),
  });
  