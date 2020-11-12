exports.createProduct = (req, res, next)=>{
    const name = req.body.name;
    const price = req.body.price;
    res.json(
        {   
            message: "products success..!!",
            data: {
                id : 1,
                name: name,
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next)=>{
    // get respon type data
    res.json(
        {
            card2: [
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
                },
                {
                    userId: 1,
                    id: 3,
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