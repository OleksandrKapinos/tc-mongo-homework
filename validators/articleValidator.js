const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(400)
        .required(),
    subtitle: Joi.string()
        .min(5),
    description:Joi.string()
        .min(5)
        .max(5000)
        .required(),
    owner: Joi.string()
        .required(),
    category: Joi.string()
        .required(),
    createdAt: Joi.date()
        .default(new Date()),
    updatedAt: Joi.date()
        .default(new Date())
});


module.exports = schema;
