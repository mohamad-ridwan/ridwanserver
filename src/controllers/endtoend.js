const Schema = require('../models/endtoend')

// POST
exports.post = (req, res, next) => {
    const name = req.body.name
    const googleId = req.body.googleId
    const _idUnique = req.body._idUnique
    const idUserInRoom = req.body.idUserInRoom
    const legibleReport = req.body.legibleReport
    const idUser = req.body.idUser
    const imageUrl = req.body.imageUrl
    const pesan = req.body.pesan
    const date = req.body.date
    const zonaTime = req.body.zonaTime
    const email = req.body.email
    const _idReply = req.body._idReply
    const idUserReply = req.body.idUserReply
    const reply = req.body.reply
    const nameReply = req.body.nameReply
    const dateLastPesan = req.body.dateLastPesan
    const idRoom = req.body.idRoom
    const idUser1 = req.body.idUser1
    const idUser2 = req.body.idUser2
    const nameUser1 = req.body.nameUser1
    const nameUser2 = req.body.nameUser2
    const imageUrlUser1 = req.body.imageUrlUser1
    const imageUrlUser2 = req.body.imageUrlUser2
    const idUserNotif = req.body.idUserNotif
    const totalNotif = req.body.totalNotif

    const postMessage = new Schema({
        idRoom: idRoom,
        _idUnique: _idUnique,
        idUserInRoom: idUserInRoom,
        legibleReport: legibleReport,
        name: name,
        googleId: googleId,
        imageUrl: imageUrl,
        pesan: pesan,
        date: date,
        zonaTime: zonaTime,
        email: email,
        idUser: idUser,
        _idReply: _idReply,
        idUserReply: idUserReply,
        reply: reply,
        nameReply: nameReply,
        dateLastPesan: dateLastPesan,
        idUserNotif: idUserNotif,
        totalNotif: totalNotif,
        dataRoom: {
            idUser1: idUser1,
            idUser2: idUser2,
            nameUser1: nameUser1,
            nameUser2: nameUser2,
            imageUrlUser1: imageUrlUser1,
            imageUrlUser2: imageUrlUser2
        }
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

// PUT From Account
exports.putIdAccount = (req, res, next) => {
    const name = req.body.name
    const nameReply = req.body.nameReply
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.name = name
            post.nameReply = nameReply
            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'Update success!!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.putLegibleReport = (req, res, next) => {
    const legibleReport = req.body.legibleReport
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.legibleReport = legibleReport

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.deleteById = (req, res, next) => {
    const delId = req.params.delId

    Schema.findById(delId)
        .then(post => {
            if (!post) {
                const error = new Error('data tidak ada')
                error.errorStatus = 404
                throw error;
            }

            return Schema.findByIdAndRemove(delId)
        })
        .then(result => {
            res.status(200).json({
                message: 'delete berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// FOR NOTIF CHAT END TO END
exports.postNotif = (req, res, next) => {
    const name = req.body.name
    const googleId = req.body.googleId
    const _idUnique = req.body._idUnique
    const idUserInRoom = req.body.idUserInRoom
    const legibleReport = req.body.legibleReport
    const idUser = req.body.idUser
    const imageUrl = req.body.imageUrl
    const pesan = req.body.pesan
    const date = req.body.date
    const zonaTime = req.body.zonaTime
    const email = req.body.email
    const _idReply = req.body._idReply
    const idUserReply = req.body.idUserReply
    const reply = req.body.reply
    const nameReply = req.body.nameReply
    const dateLastPesan = req.body.dateLastPesan
    const idRoom = req.body.idRoom
    const idUser1 = req.body.idUser1
    const idUser2 = req.body.idUser2
    const nameUser1 = req.body.nameUser1
    const nameUser2 = req.body.nameUser2
    const imageUrlUser1 = req.body.imageUrlUser1
    const imageUrlUser2 = req.body.imageUrlUser2
    const idUserNotif = req.body.idUserNotif
    const totalNotif = req.body.totalNotif

    const postNotif = new Schema({
        idRoom: idRoom,
        _idUnique: _idUnique,
        idUserInRoom: idUserInRoom,
        legibleReport: legibleReport,
        name: name,
        googleId: googleId,
        imageUrl: imageUrl,
        pesan: pesan,
        date: date,
        zonaTime: zonaTime,
        email: email,
        idUser: idUser,
        _idReply: _idReply,
        idUserReply: idUserReply,
        reply: reply,
        nameReply: nameReply,
        dateLastPesan: dateLastPesan,
        idUserNotif: idUserNotif,
        totalNotif: totalNotif,
        dataRoom: {
            idUser1: idUser1,
            idUser2: idUser2,
            nameUser1: nameUser1,
            nameUser2: nameUser2,
            imageUrlUser1: imageUrlUser1,
            imageUrlUser2: imageUrlUser2
        }
    })

    postNotif.save()
        .then(result => {
            res.status(200).json({
                message: 'user berhasil mengirim notif',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.putTotalNotif = (req, res, next) => {
    const totalNotif = req.body.totalNotif
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.totalNotif = totalNotif

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.deleteNotif = (req, res, next) => {
    const idRoom = req.body.idRoom
    const idUserNotif = req.body.idUserNotif
    const name = req.body.name
    const email = req.body.email

    const newObj = {
        idRoom: idRoom,
        idUserNotif: idUserNotif,
        name: name,
        email: email
    }

    Schema.deleteMany(newObj)
        .then(post => {
            if (!post) {
                const error = new Error('data notif tidak ada')
                error.errorStatus = 404;
                throw error;
            }

            return Schema.deleteMany(newObj)
        })
        .then(result => {
            res.status(200).json({
                message: 'delete notif berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}
// END FOR NOTIF CHAT END TO END