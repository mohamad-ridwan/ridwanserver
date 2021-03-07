const express = require('express')
const router = express.Router()

const signupController = require('../controllers/signup')

router.post('/postsignup', signupController.post)
router.get('/getsignup/:getId', signupController.get)
router.get('/getalluser', signupController.getAllUser)
router.post('/login', signupController.login)
router.post('/logingoogle', signupController.loginGoogle)
router.put('/postsignup/:postId', signupController.update)
router.put('/postsignup2/:postId2', signupController.update2)

module.exports = router