const express = require('express')
const controllerBanks = require('../../controllers/banks')
const { validateCreateBank, validateUpdateBank } = require('../../validators/bank')
const guard = require('../../helpers/guard')

const router = express.Router()

router.get('/', guard, controllerBanks.getAll)
    .get('/:id', guard, controllerBanks.getById)
    .post('/', guard, validateCreateBank, controllerBanks.create)
    .put('/:id', guard, validateUpdateBank, controllerBanks.update)
    .delete('/:id', guard, controllerBanks.remove)

module.exports = router