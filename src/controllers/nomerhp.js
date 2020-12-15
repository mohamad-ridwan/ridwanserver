const nomerHp = require('../models/nomerhp')

// POST
exports.postNomer = (req, res, next) => {
    const phoneUser = req.body.phoneUser

    const Posting = new nomerHp({
        phoneUser: phoneUser
    })

    // Save to MongoDB
    Posting.save()
        .then((result) => {
            res.status(201).json({
                message: "Data nomer hp berhasil di tambahkan!",
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET
exports.getNomer = (req, res, next) => {
    let totalItems;

    nomerHp.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return nomerHp.find()
        })
        .then(result => {
            res.status(200).json({
                message: "data nomer hp berhasil di dapatkan!",
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// PUT
exports.putNomer = (req, res, next) => {
    const phoneUser = req.body.phoneUser
    const id = req.params.id

    nomerHp.findById(id)
        .then(post => {
            if (!post) {
                const err = new Error('data nomer hp user tidak di temukan!')
                err.errorStatus = 404;
                throw err;
            }

            post.phoneUser = phoneUser
            return post.save();
        })
        .then(result => {
            res.status(200).json({
                message: "Data berhasil di update!",
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}