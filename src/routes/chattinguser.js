const express = require('express')
const router = express.Router()

const chattinguserController = require('../controllers/chattinguser')

router.post('/post', chattinguserController.post)
router.post('/post/notifchat', chattinguserController.notifChat)
router.get('/get/notifchat', chattinguserController.getNotifChat)
router.get('/get', chattinguserController.get)
router.put('/put/:putId', chattinguserController.putId)
router.delete('/delete/notifchat', chattinguserController.deleteNotifChat)

module.exports = router