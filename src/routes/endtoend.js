const express = require('express')
const router = express.Router()

const endtoendController = require('../controllers/endtoend')

router.post('/post', endtoendController.post)
router.post('/post/notifchat', endtoendController.postNotif)
router.put('/put/putaccount/:putId', endtoendController.putIdAccount)
router.put('/put/legiblereport/:putId', endtoendController.putLegibleReport)
router.put('/put/totalnotif/:putId', endtoendController.putTotalNotif)
router.get('/get', endtoendController.get)
router.delete('/delete/notifchat', endtoendController.deleteNotif)
router.delete('/delete/:delId', endtoendController.deleteById)

module.exports = router