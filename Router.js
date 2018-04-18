const express = require('express')
const controller = require('./controller')
const router = express.Router()

const port = process.env.PORT || 3000

router.post('/snacks', controller.createSnacksController)

router.get('/snacks', controller.getSnacksController)

router.get('/snacks/:id',controller.getThisSnackController)

router.put('/snacks/:id', controller.updateSnackController)

router.delete('/snacks/:id', controller.deleteSnackController)


module.exports = router
