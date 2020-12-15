const express = require('express')
const router = express.Router()

const inputDataController = require('../controllers/inputdata')

router.post('/postinput', inputDataController.postInput)
router.get('/getdata', inputDataController.getInput)
router.delete('/deletedata/:id', inputDataController.deleteInput)

module.exports = router