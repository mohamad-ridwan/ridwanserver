const express = require('express')
const router = express.Router()

const chattinguserController = require('../controllers/chattinguser')

router.post('/post', chattinguserController.post)
router.post('/post/notifchat', chattinguserController.notifChat)
router.get('/get/notifchat', chattinguserController.getNotifChat)
router.get('/get', chattinguserController.get)
router.put('/put/:putId', chattinguserController.putId)
router.put('/put/timesend/:putId', chattinguserController.putTimeSend)
router.put('/put/putaccount/:putId', chattinguserController.putAccount)
router.put('/put/notifchat/:putId', chattinguserController.putIdNotif)
router.delete('/delete/notifchat', chattinguserController.deleteNotifChat)

module.exports = router