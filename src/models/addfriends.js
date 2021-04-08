const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addfriends = new Schema({
    idUserSendRequest: {
        type: String,
        required: true
    },
    idUserAcceptRequest: {
        type: String,
        required: true
    },
    imageUrlSendRequest: {
        type: String,
        required: true
    },
    nameSendRequest: {
        type: String,
        required: true
    },
    timeUpdateSendRequest: {
        type: String,
        required: true
    },
    timeSendRequest: {
        type: String,
        required: true
    },
    legibleReport: {
        type: String,
        required: true
    },
    timeExpired: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('addfriends', addfriends)