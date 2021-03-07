const express = require('express')
const router = express.Router()

const statusController = require('../controllers/status')

router.post('/poststatus', statusController.post)
router.put('/putstatus/:putId', statusController.putId)
router.get('/getstatus', statusController.get)
router.delete('/deletestatus/:delId', statusController.delete)

module.exports = router