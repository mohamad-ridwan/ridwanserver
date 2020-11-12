exports.createProduct = (req, res, next)=>{
    res.json(
        {   
            message: "products success..!!",
            data: {
                id : 1,
                name: "Makaroni Original",
                price: 10000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next)=>{
    // get respon type data
    res.json(
        {
            message: "get ALL products Success!!",
            data: {
                id: 1,
                name : "Makaroni Original",
                price : 10000
            }
        }
    )
    next();
}