const Schema = require('../models/addfriends')
const notifAddfriends = require('../models/notifaddfriends')

exports.post = (req, res, next) => {
    const idUserSendRequest = req.body.idUserSendRequest
    const idUserAcceptRequest = req.body.idUserAcceptRequest
    const imageUrlSendRequest = req.body.imageUrlSendRequest
    const nameSendRequest = req.body.nameSendRequest
    const timeUpdateSendRequest = req.body.timeUpdateSendRequest
    const timeSendRequest = req.body.timeSendRequest
    const legibleReport = req.body.legibleReport
    const timeExpired = req.body.timeExpired

    const postAddfriends = new Schema({
        idUserSendRequest: idUserSendRequest,
        idUserAcceptRequest: idUserAcceptRequest,
        imageUrlSendRequest: imageUrlSendRequest,
        nameSendRequest: nameSendRequest,
        timeUpdateSendRequest: timeUpdateSendRequest,
        timeSendRequest: timeSendRequest,
        legibleReport: legibleReport,
        timeExpired: timeExpired,
    })

    postAddfriends.save()
        .then(result => {
            res.status(200).json({
                message: 'berhasil menambahkan teman!',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getAll = (req, res, next) => {
    let totalItems;

    Schema.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return Schema.find()
        })
        .then(result => {
            res.status(200).json({
                message: 'Data berhasil di dapatkan',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.putId = (req, res, next) => {
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
                message: 'Update berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.putTime = (req, res, next) => {
    const timeUpdateSendRequest = req.body.timeUpdateSendRequest
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.timeUpdateSendRequest = timeUpdateSendRequest
            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'Update berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.delete = (req, res, next) => {
    const delId = req.params.delId

    Schema.findById(delId)
        .then(del => {
            if (!del) {
                const error = new Error('data tidak ada')
                error.errorStatus = 404;
                throw error
            }

            return Schema.findByIdAndRemove(delId)
        })
        .then(result => {
            res.status(200).json({
                message: 'berhasil delete',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// For notif Addfriends
exports.postNotif = (req, res, next) => {
    const idUser = req.body.idUser
    const googleId = req.body.googleId
    const name = req.body.name
    const email = req.body.email

    const postNotif = new notifAddfriends({
        idUser: idUser,
        googleId: googleId,
        name: name,
        email: email
    })

    postNotif.save()
        .then(result => {
            res.status(200).json({
                message: 'berhasil post notif!',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}
// End For notif Addfriends