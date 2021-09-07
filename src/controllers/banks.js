const { HttpCode } = require('../helpers/constants')
const { BankService } = require('../services')

const BanksService = new BankService()

const getAll = async (req, res, next) => {
    try {

        const userId = req.user.id
        const banks = await BanksService.getAll(userId, req.query)

        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: { ...banks }
        })
    } catch (e) {
        next(e)
    }
}


const getById = async (req, res, next) => {
    try {
        const userId = req.user.id
        const bank = await BanksService.getById(userId, req.params)
        return res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: { bank }
        })

    } catch (e) {
        next({
            status: HttpCode.NOT_FOUND,
            message: 'Not found contact',
            data: 'Not found'
        })
    }
}


const create = async (req, res, next) => {
    try {
        const userId = req.user.id
        const bank = await BanksService.create(userId, req.body)
        return res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: { bank }
        })
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const userId = req.user.id
        const bank = await BanksService.update(userId, req.params, req.body)

        if (bank) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { bank }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found contact',
                data: 'Not found',
            })
        }

    } catch (e) {
        next(e)
    }
}


const remove = async (req, res, next) => {
    try {
        const userId = req.user.id
        const bank = await BanksService.remove(userId, req.params)
        if (bank) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { bank }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found contact',
                data: 'Not found',
            })
        }

    } catch (e) {
        next(e)
    }
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}