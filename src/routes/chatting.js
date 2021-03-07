const express = require('express')
const router = express.Router()

const chattingController = require('../controllers/chatting')

router.post('/post', chattingController.post)
router.get('/get', chattingController.get)
router.get('/get/:getId', chattingController.getId)

module.exports = router