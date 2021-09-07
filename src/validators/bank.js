const Joi = require('joi')
const { HttpCode } = require('../helpers/constants')


const schemaCreateBank = Joi.object({
    bankName: Joi.string().min(3).max(100).required(),
    interestRate: Joi.number().min(6).max(1000000).optional(),
    maximumLoan: Joi.number().min(6).max(1000000).optional(),
    minimumDownPayment: Joi.number().min(6).max(1000000).optional(),
    loanTerm: Joi.boolean().optional(),
    owner: Joi.string().optional()
})

const schemaUpdateBank = Joi.object({
    bankName: Joi.string().min(3).max(1000000).optional(),
    interestRate: Joi.number().min(6).max(1000000).optional(),
    maximumLoan: Joi.number().min(6).max(1000000).optional(),
    minimumDownPayment: Joi.number().min(6).max(1000000).optional(),
    loanTerm: Joi.boolean().optional(),
    owner: Joi.string().optional()

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


const validateCreateBank = (req, res, next) => {
    return validate(schemaCreateBank, req.body, next)
}
const validateUpdateBank = (req, res, next) => {
    return validate(schemaUpdateBank, req.body, next)
}



module.exports = {
    validateCreateBank,
    validateUpdateBank
}


