const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chattingUser = new Schema({
    idRoom: {
        type: String,
        required: true
    },
    idUser1: {
        type: String,
        required: true
    },
    idUser2: {
        type: String,
        required: true
    },
    nameUser1: {
        type: String,
        required: true
    },
    nameUser2: {
        type: String,
        required: true
    },
    imageUrlUser1: {
        type: String,
        required: true
    },
    imageUrlUser2: {
        type: String,
        required: true
    },
    currentMessage: {
        type: String,
        required: true
    },
    timeSend: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('chattingUser', chattingUser)