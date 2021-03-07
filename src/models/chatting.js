const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatting = new Schema({
    idGroup: {
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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('chatting', chatting)