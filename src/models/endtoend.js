const mongoose = require('mongoose')
const Schema = mongoose.Schema

const endtoend = new Schema({
    idRoom: {
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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('endtoend', endtoend)