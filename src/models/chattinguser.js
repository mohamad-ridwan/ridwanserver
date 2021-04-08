const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chattingUser = new Schema({
    idRoom: {
        type: String,
        required: true
    },
    idLegibleReport: {
        type: String,
        required: true
    },
    legibleReport: {
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
    _idCurrentMessage: {
        type: String,
        required: true
    },
    nameCurrentMessage: {
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
    },
    idUser1Notif: {
        type: String,
        required: true
    },
    idUser2Notif: {
        type: String,
        required: true
    },
    totalNotifUser1: {
        type: String,
        required: true
    },
    totalNotifUser2: {
        type: String,
        required: true
    },
    dateLastMessage: {
        type: String,
        required: true
    },
    timeUpdate: {
        type: String,
        required: true
    },
    timeExpired: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('chattingUser', chattingUser)