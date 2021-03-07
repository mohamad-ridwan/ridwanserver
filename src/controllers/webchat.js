const Schema = require('../models/webchat')


// POST
exports.post = (req, res, next) => {
    const googleId = req.body.googleId
    const email = req.body.email
    const name = req.body.name
    const givenName = req.body.givenName
    const familyName = req.body.familyName
    const imageUrl = req.body.imageUrl
    const infoOnline = req.body.infoOnline
    const bio = req.body.bio

    const postSignup = new Schema({
        googleId: googleId,
        email: email,
        name: name,
        givenName: givenName,
        familyName: familyName,
        imageUrl: imageUrl,
        infoOnline: infoOnline,
        bio: bio
    })

    postSignup.save()
        .then(result => {
            res.status(200).json({
                message: 'User Berhasil Signin-webchat',
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

// GET BY ID
exports.getById = (req, res, next) => {
    const getId = req.params.getId
    Schema.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('data user tidak ada')
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

// SIGN-IN
exports.signin = (req, res) => {
    const googleId = req.body.googleId
    const email = req.body.email

    Schema.findOne({
        googleId: googleId,
        email: email
    }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: 'terjadi kesalahan : (500)'
            })
        }
        if (!user) {
            return res.status(400).json({
                message: 'failed sign-in',
            })
        }
        return res.status(200).json({
            message: 'success sign-in',
            data: user
        })
    })
}

// PUT
exports.putId = (req, res, next) => {
    const infoOnline = req.body.infoOnline
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.infoOnline = infoOnline
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

// PUT BIO
exports.putBio = (req, res, next) => {
    const bio = req.body.bio
    const putId = req.params.putId

    Schema.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.bio = bio
            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'Update bio success!!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// PUT Name
exports.putName = (req, res, next) => {
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
                message: 'Update bio success!!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}