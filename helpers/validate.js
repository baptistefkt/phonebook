const Joi = require('joi');

function validate(entry) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
    phone: Joi.string()
      .regex(/^\+([0-9]{2} ){2}[0-9]{6,10}$/)
      .required(),
  };
  return Joi.validate(entry, schema, { escapeHtml: true });
}

module.exports = validate;
