const router = require('express').Router()
const { costControllers } = require('../controllers')
const { checkInput } = require('../middleware/costValidator')




router.post('/cost', checkInput,costControllers.totalCost)

module.exports = router