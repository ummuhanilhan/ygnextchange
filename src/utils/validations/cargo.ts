import * as Joi from 'joi';
import {rent, shipping, payload, fee, publish} from './common'

export const cargoSchema = Joi.object({
    _id: Joi.string(),
    rent,
    shipping,
    payload,
    fee,
    publish,
})