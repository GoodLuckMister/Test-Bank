const HttpCode = require('../helpers')
const { BankService } = require('../services')

const banksService = new BankService()

const getAll = async (req, res, next) => {
    try {
        const banks = await banksService.getAll()
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: { banks }
        })
    } catch (e) {
        next(e)
    }
}
const getById = async (req, res, next) => {
    try {
        const bank = await banksService.getById(req.params)
        if (bank) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { bank }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found bank',
                data: 'Not found',
            })
        }

    } catch (e) {
        next(e)
    }
}
const create = async (req, res, next) => {
    try {
        const bank = await banksService.create(req.body)
        res.status(HttpCode.OK).json({
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
        const bank = await banksService.update(req.params, req.body)
        if (bank) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { bank }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found bank',
                data: 'Not found',
            })
        }

    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const bank = await banksService.remove(req.params)
        if (bank) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { bank }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found bank',
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