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
  email: Joi.string(),
  phone: Joi.string().required(),
  type: Joi.string(),//.required().valid('home', 'office','mobile'),
  code: Joi.string(), // country-iso codes
  verify: Joi.boolean().default(false),
});

export const direction = Joi.object({
  city: Joi.string(),
  zip: Joi.string(),
  district: Joi.string(),
  province: Joi.string(),
  town: Joi.string(),
  country: Joi.object({
    name: Joi.string(),
    code: Joi.string(),
  }),
})

export const place = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  address: Joi.string().required(),
  street: Joi.string().allow('').optional(),
}).optional()

// address
export const statement = Joi.object({
  title: Joi.string(),
  directions: Joi.string(),
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
  volume: measure.optional(),
  dimensions: Joi.object({
      length:Joi.string().required(),
      width:Joi.string().required(),
      height:Joi.string().required(),
      unit:Joi.string().required(),
  }).optional(),
  tonnage:Joi.object({
      range:Joi.string().optional().allow(''),
  }).optional(),
  freight:Joi.object({
      density: Joi.number().optional(),
      volume: Joi.number().optional(),
  }).optional(),
  meter:Joi.string().optional(),
  stow:Joi.boolean().optional(),
  porter:Joi.boolean().optional(),
  package:Joi.string().allow('').optional(),
});

export const price = Joi.object({
  amount: Joi.boolean(),
  tonnage: Joi.number().when('amount', { is: true, then: Joi.number().required(), otherwise: Joi.number().optional() }),
  unit: Joi.number().when('amount', { is: true, then: Joi.number().required(), otherwise: Joi.number().optional() }),
  total: Joi.number().when('amount', { is:false, then: Joi.number().required(), otherwise: Joi.number().optional() }),
})

// payment method
export const fee = Joi.object({
  type: Joi.string().optional(),
  currency: Joi.string().required(),
  tax: Joi.string().optional(),
  paymethod: Joi.string().required(),
  vat: Joi.string().required(), // bool
  bargain: Joi.boolean(),
  manual: Joi.boolean(),
  price,
});

  
export const publish = Joi.object({
  start: Joi.object({
    date: Joi.any().required(),
    option: Joi.string().required()
  }),
  end: Joi.object({
    date: Joi.any().required(),
    option: Joi.string().required()
  })
})




