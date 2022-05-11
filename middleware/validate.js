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