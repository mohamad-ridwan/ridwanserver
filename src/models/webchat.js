const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signInWebchat = new Schema({
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
    infoOnline: {
        type: String,
        required: true
    },
    dateLastOnline: {
        type: String,
        required: true
    },
    timeLastOnline: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('signinwebchat', signInWebchat)