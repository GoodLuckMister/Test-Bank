const HttpCode = require('../helpers')
const { ProductService } = require('../services')

const productService = new ProductService()

const getAll = async (req, res, next) => {
    try {
        const products = await productService.getAll()
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: { products }
        })
    } catch (e) {
        next(e)
    }
}
const getById = async (req, res, next) => {
    try {
        const product = await productService.getById(req.params)
        if (product) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { product }
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
        const product = await productService.create(req.body)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: { product }
        })
    } catch (e) {
        next(e)
    }
}
const update = async (req, res, next) => {
    try {
        const product = await productService.update(req.params, req.body)
        if (product) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { product }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found product',
                data: 'Not found',
            })
        }

    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const product = await productService.remove(req.params)
        if (product) {
            return res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: { product }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: 'Not found product',
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