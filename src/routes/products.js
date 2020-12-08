// import express
const express = require('express')
const router = express.Router();

const productController = require('../controllers/products');

// For Semua HARGA
// POST
router.post('/postproduk', productController.createProduct);

// GET with query params
router.get('/getproduk', productController.getProduct);

// GET with params ID
<<<<<<< HEAD
router.get('/getproductbyid/', productController.getProductById)
=======
router.get('/getproductbyid/:productId', productController.getProductById)
>>>>>>> 488c3368a127c628e8a25f28cd56726f4be9cbdf

module.exports = router