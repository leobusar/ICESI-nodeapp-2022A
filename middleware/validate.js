<<<<<<< HEAD
const Joi = require('joi');

const validate = (schema) => {
    return (req, res, next) => {
        const {error} =  schema.validate(req.body)
        //console.log(error)

        const valid = error == undefined

        if(valid){
            next()
        }else{
            const {details} = error

            const message = details.map(err => err.message).join(', ')
            console.error(message)
            res.status(422).json({error: message})
        }
    }
}

module.exports = validate; 
=======
const { valid } = require("joi");
const Joi = require("joi")

const validate = (schema) => {
  return (req, res, next)  => { 
    const {error } = schema.validate (req.body);

    if (error == undefined)
      next()
    else {
      const {details} = error
      const message = details.map (q=> q.message).join()
      res.status(422).json({error: message})
    }
  }
}


module.exports = validate
>>>>>>> e4f5ac4e1e32d6945d5870fd39a81a0337a7285b
