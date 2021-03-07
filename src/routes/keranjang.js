const express = require('express')
const router = express.Router();

const keranjangController = require('../controllers/keranjang')

// POST
router.post('/postkeranjang', keranjangController.postData)

// GET
router.get('/getkeranjang', keranjangController.getData)
// GET with query
router.get('/getkeranjang/:getId', keranjangController.getId)

// PUT
router.put('/putkeranjang/:id', keranjangController.putData)
// DELETE
router.delete('/postkeranjang/:delId', keranjangController.delete)

module.exports = router