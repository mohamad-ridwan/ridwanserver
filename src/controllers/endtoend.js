const Schema = require('../models/endtoend')

// POST
exports.post = (req, res, next) => {
    const name = req.body.name
    const googleId = req.body.googleId
    const idUser = req.body.idUser
    const imageUrl = req.body.imageUrl
    const pesan = req.body.pesan
    const date = req.body.date
    const email = req.body.email
    const _idReply = req.body._idReply
    const idUserReply = req.body.idUserReply
    const reply = req.body.reply
    const nameReply = req.body.nameReply
    const idRoom = req.body.idRoom

    const postMessage = new Schema({
        idRoom: idRoom,
        name: name,
        googleId: googleId,
        imageUrl: imageUrl,
        pesan: pesan,
        date: date,
        email: email,
        idUser: idUser,
        _idReply: _idReply,
        idUserReply: idUserReply,
        reply: reply,
        nameReply: nameReply
    })

    postMessage.save()
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
                message: 'chatting end-to-end berhasil di dapatkan!',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}