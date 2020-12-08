const express = require('express')
const router = express.Router();

const limaRibuController = require('../controllers/limaribu');

// For 5RB
// POST
router.post('/postlimaribu', limaRibuController.createLimaRibu)

// GET with query params
<<<<<<< HEAD
router.get('/getlimaribu/', limaRibuController.getLimaRibu)

// GET with params ID
router.get('/getlimaribu/:getId', limaRibuController.getLimaRibuById)
=======
router.get('/getlimaribu', limaRibuController.getLimaRibu)
>>>>>>> 488c3368a127c628e8a25f28cd56726f4be9cbdf

module.exports = router
