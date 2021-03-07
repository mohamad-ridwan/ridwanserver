const dataKeranjang = require('../models/keranjang')

// POST
exports.postData = (req, res, next) => {
    // if (!req.file) {
    //     const err = new Error('Image Harus di Upload!');
    //     err.errorStatus = 422
    //     throw err;
    // }

    const idUser = req.body.idUser
    const idProduct = req.body.idProduct
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image

    // create dynamic to mongoDB
    const Posting = new dataKeranjang({
        idUser: idUser,
        idProduct: idProduct,
        name: name,
        price: price,
        image: image
    })

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: "data keranjang berhasil di tambahkan!!",
                keranjang: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET
exports.getData = (req, res, next) => {
    let totalItems;

    dataKeranjang.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return dataKeranjang.find()
        })
        .then(result => {
            res.status(200).json({
                message: "data keranjang berhasil di dapatkan!!",
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// GET with query
exports.getId = (req, res, next) => {
    const getId = req.params.getId
    dataKeranjang.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('data keranjang tidak ada')
                error.errorStatus = 404
                throw error;
            }
            res.status(200).json({
                message: 'Data berhasil di dapatkan',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// PUT
exports.putData = (req, res, next) => {
    const label = req.body.label;
    const name = req.body.name;
    const price = req.body.price;
    const postId = req.params.id;

    dataKeranjang.findById(postId)
        .then(post => {
            if (!post) {
                const err = new Error('data makaroni tidak di temukan')
                err.errorStatus = 404;
                throw err;
            }

            post.label = label
            post.name = name
            post.price = price

            return post.save();
        })
        .then(result => {
            res.status(201).json({
                message: "data makaroni berhasil di tambahkan ke keranjang",
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// DELETE
exports.delete = (req, res, next) => {
    const delId = req.params.delId

    dataKeranjang.findById(delId)
        .then(res => {
            if (!res) {
                const error = new Error('data tidak di temukan!')
                error.errorStatus = 404
                throw error
            }

            return dataKeranjang.findByIdAndRemove(delId)
        })
        .then(result => {
            res.status(200).json({
                message: 'Delete data berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}