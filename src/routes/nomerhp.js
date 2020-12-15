const express = require('express')
const router = express.Router()

const nomerhpController = require('../controllers/nomerhp')

router.post('/nomer', nomerhpController.postNomer)
router.get('/getnomer', nomerhpController.getNomer)
router.put('/putnomer/:id', nomerhpController.putNomer)

module.exports = router