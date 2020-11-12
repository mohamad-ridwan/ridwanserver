exports.createProduct = (req, res, next)=>{
    res.json(
        {   
            message: "products success..!!",
            data: {
                id : 1,
                name: "Makaroni Original",
                price: 50000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next)=>{
    // get respon type data
    res.json(
        {
            card: [
                {
                    userId: 1,
                    id: 1,
                    name: "Makaroni Panggang",
                    price: 10.000,
                    hargaNormal: 20.000,
                    terjual: 90,
                    stock : 200,
                    labelInfo: "New"
                },
                {
                    userId: 1,
                    id: 2,
                    name: "Makaroni Panggang",
                    price: 10.000,
                    hargaNormal: 20.000,
                    terjual: 90,
                    stock : 200,
                    labelInfo: "New"
                }
            ]
        }
    )
    next();
}