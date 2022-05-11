const Joi = require('joi')

const schemas =  {
    product: Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(100).required(),
        price: Joi.number().min(1).max(100000).required()
    })
}

module.exports = schemas