const express = require('express')
const router = express.Router()

const webchatController = require('../controllers/webchat')

router.post('/postchat', webchatController.post)
router.get('/getchat', webchatController.get)
router.post('/getchat/signin', webchatController.signin)
router.get('/getchat/:getId', webchatController.getById)
router.put('/putchat/:putId', webchatController.putId)
router.put('/putchat/putbio/:putId', webchatController.putBio)
router.put('/putchat/putname/:putId', webchatController.putName)

module.exports = router