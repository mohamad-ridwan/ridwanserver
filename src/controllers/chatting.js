const Schema = require('../models/chatting')

// POST
exports.post = (req, res, next) => {
    const name = req.body.name
    const googleId = req.body.googleId
    const imageUrl = req.body.imageUrl
    const pesan = req.body.pesan
    const date = req.body.date
    const idGroup = req.body.idGroup

    const postPesan = new Schema({
        idGroup: idGroup,
        name: name,
        googleId: googleId,
        imageUrl: imageUrl,
        pesan: pesan,
        date: date
    })

    postPesan.save()
        .then(result => {
            res.status(200).json({
                message: 'User berhasil chatting',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET ALL
exports.get = (req, res, next) => {
    let totalItems;

    Schema.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return Schema.find()
        })
        .then(result => {
            res.status(200).json({
                message: 'chatting user berhasil di dapatkan',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// GET BY ID
exports.getId = (req, res, next) => {
    const getId = req.params.getId
    Schema.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('data chating user tidak ada')
                error.errorStatus = 404
                throw error
            }
            res.status(200).json({
                message: 'Data user berhasil di dapatkan!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}