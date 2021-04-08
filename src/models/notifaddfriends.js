const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notifAddfriends = new Schema({
    idUser: {
        type: String,
        required: true,
    },
    googleId: {
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

module.exports = mongoose.model('notifaddfriends', notifAddfriends)