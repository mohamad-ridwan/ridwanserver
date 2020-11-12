const express = require('express');

// get method express
const server = express();

server.use(()=>{
    console.log("hello server");
})

server.listen(4000);