const mongoose = require('mongoose')
const Schema = mongoose.Schema

const status = new Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
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
    imageUrl: {
        type: String,
        required: true
    },
    textStatus: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('status', status)