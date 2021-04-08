const mongoose = require('mongoose')
const Schema = mongoose.Schema

const endtoend = new Schema({
    idRoom: {
        type: String,
        required: true
    },
    idUserNotif: {
        type: String,
        required: true,
    },
    totalNotif: {
        type: String,
        required: true
    },
    _idUnique: {
        type: String,
        required: true
    },
    idUserInRoom: {
        type: String,
        required: true
    },
    legibleReport: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    pesan: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    zonaTime: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    _idReply: {
        type: String,
        required: true
    },
    idUserReply: {
        type: String,
        required: true
    },
    reply: {
        type: String,
        required: true
    },
    nameReply: {
        type: String,
        required: true
    },
    dateLastPesan: {
        type: String,
        required: true
    },
    dataRoom: {
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
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('endtoend', endtoend)