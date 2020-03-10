const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),

  password: Joi.string()
    .min(6)
    .max(10)
    .required(),
});

export default userSchema;
