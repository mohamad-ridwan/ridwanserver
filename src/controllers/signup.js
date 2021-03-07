const Schema = require('../models/signup')

// POST 
exports.post = (req, res, next) => {
    const idUser = req.body.idUser
    const username = req.body.username
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const googleId = req.body.googleId
    const givenName = req.body.givenName
    const familyName = req.body.familyName
    const name = req.body.name
    const emailGoogle = req.body.emailGoogle
    const imageUrl = req.body.imageUrl

    const postSignup = new Schema({
        idUser: idUser,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
        accountGoogle: {
            googleId: googleId,
            givenName: givenName,
            familyName: familyName,
            name: name,
            emailGoogle: emailGoogle,
            imageUrl: imageUrl
        }
    })

    postSignup.save()
        .then(result => {
            res.status(201).json({
                message: 'User Berhasil SignUp',
                signup: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET
exports.get = (req, res, next) => {
    const getId = req.params.getId
    Schema.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('data user tidak ada')
                error.errorStatus = 404
                throw error
            }
            res.status(200).json({
                message: 'data user berhasil di dapatkan!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// GET ALL USER
exports.getAllUser = (req, res, next) => {
    let totalItems;

    Schema.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return Schema.find()
        })
        .then(result => {
            res.status(200).json({
                message: 'Data user berhasil di dapatkan!!',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// LOGIN
exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    Schema.findOne({
        username: username,
        password: password
    }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: 'terjadi kesalahan : (500)'
            })
        }
        if (!user) {
            return res.status(400).json({
                message: 'failed sigin-in'
            })
        }
        return res.status(200).json({
            message: 'success sign-in',
            data: user
        })
    })
}

exports.loginGoogle = (req, res) => {
    const idUser = req.body.idUser
    const username = req.body.username

    Schema.findOne({
        idUser: idUser,
        username: username
    }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: 'terjadi kesalahan : (500)'
            })
        }
        if (!user) {
            return res.status(400).json({
                message: 'failed sign-in with google account'
            })
        }
        return res.status(200).json({
            message: 'success sign-in with google account',
            data: user
        })
    })
}

// UPDATE / PUT
exports.update = (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const postId = req.params.postId

    Schema.findById(postId)
        .then(post => {
            if (!post) {
                const err = new Error('data user tidak di temukan!')
                err.errorStatus = 404
                throw err
            }
            post.username = username
            post.email = email
            post.phoneNumber = phoneNumber

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update user berhasil!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

// UPDATE2 / PUT2
exports.update2 = (req, res, next) => {
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const postId2 = req.params.postId2

    Schema.findById(postId2)
        .then(post => {
            if (!post) {
                const err = new Error('data user tidak di temukan!')
                err.errorStatus = 404
                throw err
            }
            post.password = password
            post.confirmPassword = confirmPassword

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update user berhasil!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}