const Joi = require('joi')
const HttpCode = require('../helpers/constants')

const schemaCreateProduct = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    imageUrl: Joi.string().min(3).max(100).optional(),
    count: Joi.number().optional(),
    size: Joi.object().optional(),
    weight: Joi.string().min(3).max(100).optional(),
    comments: Joi.array().optional()
})

const schemaUpdateProduct = Joi.object({
    name: Joi.string().min(3).max(100).optional(),
    imageUrl: Joi.string().min(3).max(100).optional(),
    count: Joi.number().optional(),
    size: Joi.object().optional(),
    weight: Joi.string().min(3).max(100).optional(),
    comments: Joi.array().optional()

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

module.exports.validateCreateProduct = (req, res, next) => {
    return validate(schemaCreateProduct, req.body, next)
}
module.exports.validateUpdateProduct = (req, res, next) => {
    return validate(schemaUpdateProduct, req.body, next)
}
