const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string()
        .min(4)
        .max(50)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(60)
        .required(),
    role: Joi.string(),
    createdAt: Joi.date()
        .default(new Date()),
    numberOfArticles: Joi.number()
        .default(0),
    nickname: Joi.string()
});


module.exports = schema;
