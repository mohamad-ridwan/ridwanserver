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
            data1: [
                {
                    userId: 1,
                    id: 1,
                    name: "Makaroni Panggang",
                    price: 10.000,
                    hargaNormal: 20.000,
                    terjual: 90,
                    stock : 200
                }
            ],
            oke2: [
                {
                    userId: 1,
                    id: 1,
                    name: "Makaroni Original",
                    terjual: 5,
                    stock : 50
                },
                {
                    userId: 1,
                    id: 2,
                    name: "Makaroni Hot Barbeque",
                    terjual: 50,
                    stock : 120
                },
                {
                    userId: 1,
                    id: 3,
                    name: "Makaroni Rumput Laut",
                    terjual: 19,
                    stock : 21
                },
                {
                    userId: 1,
                    id: 4,
                    name: "Makaroni Keju",
                    terjual: 5,
                    stock : 2
                }
            ]
        }
    )
    next();
}