// import express
const express = require('express')
const router = express.Router();

const productController = require('../controllers/products');

// POST
router.post('/postproduk', productController.createProduct);

// GET with query params
router.get('/getproduk', productController.getProduct);

module.exports = router