const Schema = require('../models/signingroup')

// POST
exports.post = (req, res, next) => {
    const nameGroup = req.body.nameGroup
    const imageUrlGroup = req.body.imageUrlGroup
    const totalMember = req.body.totalMember
    const _id = req.body._id
    const googleId = req.body.googleId
    const name = req.body.name
    const email = req.body.email
    const imageUrl = req.body.imageUrl
    const infoOnline = req.body.infoOnline
    const members = req.body.members

    const postSignin = new Schema({
        nameGroup: nameGroup,
        imageUrlGroup: imageUrlGroup,
        totalMember: totalMember,
        members
        // members: {
        //     _id: _id,
        //     googleId: googleId,
        //     name: name,
        //     email: email,
        //     imageUrl: imageUrl,
        //     // infoOnline: infoOnline
        // }
    })

    postSignin.save()
        .then(result => {
            res.status(200).json({
                message: 'user berhasil join',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET ALL USER JOIN
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
exports.getId = (req, res, next) => {
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

// PUT
exports.put = (req, res, next) => {
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