exports.createProduct = (req, res, next)=>{
    const name = req.body.name;
    const price = req.body.price;
    res.json(
        {   
            message: "products success..!!",
            data: {
                id : 1,
                name: "post API success!!!",
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
                    tes: "Tes API",
                    price: 10.000,
                    hargaNormal: 20.000,
                    terjual: 90,
                    stock : 200,
                    bodyJudul: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, esse eum? Vero aspernatur impedit soluta expedita eum assumenda doloribus blanditiis."
                }
            ]
        }
    )
    next();
}