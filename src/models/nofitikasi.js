const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notifikasi = new Schema({
    idRoom: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('notifikasi', notifikasi)