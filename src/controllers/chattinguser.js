const Schema = require('../models/chattinguser')
const notifikasi = require('../models/nofitikasi')

// POST
exports.post = (req, res, next) => {
    const idRoom = req.body.idRoom
    const idLegibleReport = req.body.idLegibleReport
    const legibleReport = req.body.legibleReport
    const idUser1 = req.body.idUser1
    const idUser2 = req.body.idUser2
    const nameUser1 = req.body.nameUser1
    const nameUser2 = req.body.nameUser2
    const imageUrlUser1 = req.body.imageUrlUser1
    const imageUrlUser2 = req.body.imageUrlUser2
    const _idCurrentMessage = req.body._idCurrentMessage
    const nameCurrentMessage = req.body.nameCurrentMessage
    const currentMessage = req.body.currentMessage
    const timeSend = req.body.timeSend
    const idUser1Notif = req.body.idUser1Notif
    const idUser2Notif = req.body.idUser2Notif
    const totalNotifUser1 = req.body.totalNotifUser1
    const totalNotifUser2 = req.body.totalNotifUser2
    const dateLastMessage = req.body.dateLastMessage
    const timeUpdate = req.body.timeUpdate
    const timeExpired = req.body.timeExpired

    const postChattingUser = new Schema({
        idRoom: idRoom,
        idLegibleReport: idLegibleReport,
        legibleReport: legibleReport,
        idUser1: idUser1,
        idUser2: idUser2,
        nameUser1: nameUser1,
        nameUser2: nameUser2,
        imageUrlUser1: imageUrlUser1,
        imageUrlUser2: imageUrlUser2,
        _idCurrentMessage: _idCurrentMessage,
        nameCurrentMessage: nameCurrentMessage,
        currentMessage: currentMessage,
        timeSend: timeSend,
        idUser1Notif: idUser1Notif,
        idUser2Notif: idUser2Notif,
        totalNotifUser1: totalNotifUser1,
        totalNotifUser2: totalNotifUser2,
        dateLastMessage: dateLastMessage,
        timeUpdate: timeUpdate,
        timeExpired: timeExpired
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
    const _idCurrentMessage = req.body._idCurrentMessage
    const nameCurrentMessage = req.body.nameCurrentMessage
    const currentMessage = req.body.currentMessage
    const timeSend = req.body.timeSend
    const idUser1Notif = req.body.idUser1Notif
    const idUser2Notif = req.body.idUser2Notif
    const totalNotifUser1 = req.body.totalNotifUser1
    const totalNotifUser2 = req.body.totalNotifUser2
    const dateLastMessage = req.body.dateLastMessage
    const timeUpdate = req.body.timeUpdate
    const timeExpired = req.body.timeExpired
    const legibleReport = req.body.legibleReport
    const idLegibleReport = req.body.idLegibleReport
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.timeExpired = timeExpired
            post.timeUpdate = timeUpdate
            post.dateLastMessage = dateLastMessage
            post._idCurrentMessage = _idCurrentMessage
            post.nameCurrentMessage = nameCurrentMessage
            post.currentMessage = currentMessage
            post.timeSend = timeSend
            post.idUser1Notif = idUser1Notif
            post.idUser2Notif = idUser2Notif
            post.totalNotifUser1 = totalNotifUser1
            post.totalNotifUser2 = totalNotifUser2
            post.legibleReport = legibleReport
            post.idLegibleReport = idLegibleReport
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

// PUT Only Time Send
exports.putTimeSend = (req, res, next) => {
    const timeSend = req.body.timeSend
    const timeUpdate = req.body.timeUpdate
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.timeUpdate = timeUpdate
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

// Put User Chatting From Update Account
exports.putAccount = (req, res, next) => {
    const nameUser1 = req.body.nameUser1
    const nameUser2 = req.body.nameUser2
    const nameCurrentMessage = req.body.nameCurrentMessage
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.nameUser1 = nameUser1
            post.nameUser2 = nameUser2
            post.nameCurrentMessage = nameCurrentMessage
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

// PUT Notif chat
exports.putIdNotif = (req, res, next) => {
    const name = req.body.name
    const putId = req.params.putId

    notifikasi.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.name = name
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
