const Schema = require('../models/status')

// POST
exports.post = (req, res, next) => {
    const googleId = req.body.googleId
    const email = req.body.email
    const name = req.body.name
    const givenName = req.body.givenName
    const familyName = req.body.familyName
    const imageUrl = req.body.imageUrl
    const textStatus = req.body.textStatus
    const idUser = req.body.idUser
    const time = req.body.time
    const bgColor = req.body.bgColor

    const postStatus = new Schema({
        googleId: googleId,
        email: email,
        name: name,
        givenName: givenName,
        familyName: familyName,
        imageUrl: imageUrl,
        textStatus: textStatus,
        idUser: idUser,
        time: time,
        bgColor: bgColor
    })

    postStatus.save()
        .then(result => {
            res.status(200).json({
                message: 'User berhasil post status',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET ALL USER
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
                message: 'Data user berhasil di dapatkan!',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// PUT
exports.putId = (req, res, next) => {
    const givenName = req.body.givenName
    const familyName = req.body.familyName
    const name = req.body.name
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.givenName = givenName
            post.familyName = familyName
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

// DELETE
exports.delete = (req, res, next) => {
    const delId = req.params.delId

    Schema.findById(delId)
        .then(post => {
            if (!post) {
                const error = new Error('data status tidak ada')
                error.errorStatus = 404;
                throw error;
            }

            return Schema.findByIdAndRemove(delId)
        })
        .then(result => {
            res.status(200).json({
                message: 'Delete status berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}