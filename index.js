const express = require('express');
const bodyParser = require('body-parser');

// get method express
const server = express();
// Call Router EndPoint
const productRoutes = require('./src/routes/products');

server.use(bodyParser.json()); 

// Allow Access for mode cors Response API
server.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

server.use('/v1/customer', productRoutes);

server.listen(4000);