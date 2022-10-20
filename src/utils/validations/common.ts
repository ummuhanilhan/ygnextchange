import * as Joi from 'joi';
export const passwordExp = new RegExp('^[a-zA-Z0-9]{3,30}$');

// vehicle features
export const rent = Joi.object({
  type: Joi.string().required(),
  vehicle: Joi.string().required(),
  features: Joi.array().required(),
  options: Joi.array().required(),
});

export const contact = Joi.object({
  name: Joi.string(),
  phone: Joi.string().required(),
  type: Joi.string().required().valid('home', 'office','mobile'),
  code: Joi.string(), // country-iso codes
  verify: Joi.boolean().default(false),
});

export const direction = Joi.object({
  city: Joi.string(),
  country: Joi.object({
    name: Joi.string(),
    code: Joi.string(),
    zip: Joi.string(),
    district: Joi.string(),
    province: Joi.string(),
    town: Joi.string(),
  }),
})

export const place = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  address: Joi.string().required(),
  street: Joi.string().optional(),
}).optional()

// address
export const statement = Joi.object({
  geolocation: Joi.object({
    lat: Joi.alternatives(
      Joi.string(), Joi.number()
    ).required(),
    lng: Joi.alternatives(
      Joi.string(), Joi.number()
    ).required()
  }),
  contact: contact,
  place: place,
  direction: direction
}).required();

export const label = Joi.object({
  text: Joi.string(),
  value: Joi.number(),
})

//  datetime & location
export const shipping = Joi.object({
  time: Joi.string().required(),
  "time-custom": Joi.string().optional(),
  range: Joi.array().required(),
  load: statement,
  unload: statement,
  distance: label,
  duration: label,
});


const measure = Joi.object({
  size: Joi.string().required(),
  unit: Joi.string().required(),
})

// cargo
export const payload = Joi.object({
  bargain: Joi.boolean(),
  quantity: Joi.string(),
  type: Joi.string().required(),
  definition: Joi.string().required(),
  transport: Joi.object({
    load: Joi.string().required(),
    unload: Joi.string().required(),
  }),
  weight: measure,
  capacity: measure,
  volume: measure.required(),
  dimensions: Joi.object({
      length:Joi.string().required(),
      width:Joi.string().required(),
      height:Joi.string().required(),
      unit:Joi.string().required(),
  }).required(),
  tonnage:{
      range:Joi.string(),
  },
  freight:{
      density: Joi.number(),
      volume: Joi.number(),
  },
  package:Joi.string(),
  meter:Joi.string(),
  stow:Joi.boolean(),
  porter:Joi.boolean(),
});

// payment method
export const fee = Joi.object({
  type: Joi.string().optional(),
  currency: Joi.string().required(),
  tax: Joi.string().optional(),
  paymethod: Joi.string().required(),
  vat: Joi.string().required(), // bool
  bargain: Joi.boolean(),
  amount: Joi.boolean(),
  manual: Joi.boolean(),
  price: Joi.object({
    manual: Joi.boolean(),
    tonnage: Joi.number(),
    total: Joi.number(),
    unit: Joi.number(),

  }),
});

  
export const publish = Joi.object({
  start: Joi.object({
    date: Joi.date(),
    option: Joi.string()
  }),
  end: Joi.object({
    date: Joi.date(),
    option: Joi.string()
  })
})




