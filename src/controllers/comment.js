const HttpCode = require('../helpers')
const { CommentService } = require('../services')

const commentService = new CommentService()

const create = async (req, res, next) => {
    try {
        const product = await commentService.create(req.params, req.body)
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
    create,
    update,
    remove,
}