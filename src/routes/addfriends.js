const express = require('express')
const router = express.Router()

const addfriendsController = require('../controllers/addfriends')

router.post('/post', addfriendsController.post)
router.post('/postnotif', addfriendsController.postNotif)
router.get('/getall', addfriendsController.getAll)
router.put('/put/:putId', addfriendsController.putId)
router.put('/puttime/:putId', addfriendsController.putTime)
router.delete('/delete/:delId', addfriendsController.delete)

module.exports = router