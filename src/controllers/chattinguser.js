const Schema = require('../models/chattinguser')
const notifikasi = require('../models/nofitikasi')

// POST
exports.post = (req, res, next) => {
    const idRoom = req.body.idRoom
    const idUser1 = req.body.idUser1
    const idUser2 = req.body.idUser2
    const nameUser1 = req.body.nameUser1
    const nameUser2 = req.body.nameUser2
    const imageUrlUser1 = req.body.imageUrlUser1
    const imageUrlUser2 = req.body.imageUrlUser2
    const currentMessage = req.body.currentMessage
    const timeSend = req.body.timeSend

    const postChattingUser = new Schema({
        idRoom: idRoom,
        idUser1: idUser1,
        idUser2: idUser2,
        nameUser1: nameUser1,
        nameUser2: nameUser2,
        imageUrlUser1: imageUrlUser1,
        imageUrlUser2: imageUrlUser2,
        currentMessage: currentMessage,
        timeSend: timeSend
    })

    postChattingUser.save()
        .then(result => {
            res.status(200).json({
                message: 'chatting user berhasil di post!',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET ALL USER CHATTING
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
                message: 'Data chatting user berhasil di dapatkan!',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// PUT USER CHATTING
exports.putId = (req, res, next) => {
    const currentMessage = req.body.currentMessage
    const timeSend = req.body.timeSend
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.currentMessage = currentMessage
            post.timeSend = timeSend
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

// POST Notif Chat
exports.notifChat = (req, res, next) => {
    const idRoom = req.body.idRoom
    const idUser = req.body.idUser
    const name = req.body.name
    const email = req.body.email

    const postNotifikasi = new notifikasi({
        idRoom: idRoom,
        idUser: idUser,
        name: name,
        email: email
    })

    postNotifikasi.save()
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

// Get all notif chat
exports.getNotifChat = (req, res, next) => {
    let totalItems;

    notifikasi.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return notifikasi.find()
        })
        .then(result => {
            res.status(200).json({
                message: 'data notif berhasil di dapatkan!!',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// DELETE notif chat
exports.deleteNotifChat = (req, res, next) => {
    const idRoom = req.body.idRoom
    const idUser = req.body.idUser
    const name = req.body.name
    const email = req.body.email

    const newObj = {
        idRoom: idRoom,
        idUser: idUser,
        name: name,
        email: email
    }

    notifikasi.deleteMany(newObj)
        .then(post => {
            if (!post) {
                const error = new Error('data notif tidak ada')
                error.errorStatus = 404;
                throw error;
            }

            return notifikasi.deleteMany(newObj)
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
