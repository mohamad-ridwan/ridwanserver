// import express
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// Create -> POST : http://localhost:4000/api/cards/product
router.post('/product', productsController.createProduct);


// Create -> GET : http://localhost:4000/api/cards/products
router.get('/produk', productsController.getAllProducts);


module.exports = router;