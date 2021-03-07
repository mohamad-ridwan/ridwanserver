const express = require('express')
const router = express.Router()

const signingroupController = require('../controllers/signingroup')

router.post('/post', signingroupController.post)
router.get('/get', signingroupController.get)
router.get('/get/:getId', signingroupController.getId)
router.put('/put/:putId', signingroupController.put)

module.exports = router