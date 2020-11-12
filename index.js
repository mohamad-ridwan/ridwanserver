const express = require('express');

// get method express
const server = express();
// Call Router EndPoint
const productRoutes = require('./src/routes/products');

server.use('/api/cards', productRoutes);

server.listen(4000);