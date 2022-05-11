<<<<<<< HEAD
const Joi = require('joi')

const schemas =  {
    product: Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(100).required(),
        price: Joi.number().min(1).max(100000).required()
    })
=======
const  Joi = require("joi")

const schemas = {
  user: Joi.object().keys({
    name: Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9\ ]{8,30}$')).required(),
    email: Joi.string().email({minDomainSegments: 2}),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    token: [Joi.string(), Joi.number()]
  }),

  product: Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(10).required(),
    price: Joi.number().min(1).max(10000)
  })
>>>>>>> e4f5ac4e1e32d6945d5870fd39a81a0337a7285b
}

module.exports = schemas