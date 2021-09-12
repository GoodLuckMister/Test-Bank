const express = require('express')
const controllerProducts = require('../controllers')
const commentProducts = require('../controllers/comment')
const { validateCreateProduct, validateUpdateProduct } = require('../validators/products')

const router = express.Router()

router.get('/', controllerProducts.getAll)
router.get('/:id', controllerProducts.getById)
router.post('/', validateCreateProduct, controllerProducts.create)
router.put('/:id', validateUpdateProduct, controllerProducts.update)
router.delete('/:id', controllerProducts.remove)

module.exports = router
