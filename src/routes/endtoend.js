const express = require('express')
const router = express.Router()

const endtoendController = require('../controllers/endtoend')

router.post('/post', endtoendController.post)
router.get('/get', endtoendController.get)

module.exports = router