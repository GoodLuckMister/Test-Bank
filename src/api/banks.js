const express = require('express')
const controllerBanks = require('../controllers')
const { validateCreateBank, validateUpdateBank } = require('../validators/banks')

const router = express.Router()

router.get('/', controllerBanks.getAll)
router.get('/:id', controllerBanks.getById)
router.post('/', validateCreateBank, controllerBanks.create)
router.put('/:id', validateUpdateBank, controllerBanks.update)
router.delete('/:id', controllerBanks.remove)

module.exports = router
