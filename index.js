const express = require('express');

// get method express
const server = express();
// Call Router EndPoint
const productRoutes = require('./src/routes/products');

// Allow Access for mode cors Response API
server.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next();
})

server.use('/api/cards', productRoutes);

server.listen(4000);