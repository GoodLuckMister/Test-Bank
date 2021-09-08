const Joi = require('joi')
const HttpCode = require('../helpers/constants')

const schemaCreateContact = Joi.object({
    name: Joi.string().min(3).max(100).required(),

})

const schemaUpdateContact = Joi.object({
    name: Joi.string().alphanum().min(3).max(100).optional(),

})



const validate = (schema, body, next) => {
    const { error } = schema.validate(body)
    if (error) {
        const [{ message }] = error.details
        return next({
            status: HttpCode.BAD_REQUEST,
            message: `Field ${message.replace(/"/g, '')}`,
            data: 'Bad request'
        })
    }
    next()
}

module.exports.validateCreateBank = (req, res, next) => {
    return validate(schemaCreateContact, req.body, next)
}
module.exports.validateUpdateBank = (req, res, next) => {
    return validate(schemaUpdateContact, req.body, next)
}
