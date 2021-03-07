const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signUp = new Schema({
    idUser: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    accountGoogle: {
        googleId: {
            type: String,
            required: true
        },
        givenName: {
            type: String,
            required: true
        },
        familyName: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        emailGoogle: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('signup', signUp)
