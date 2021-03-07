const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signinGroup = new Schema({
    nameGroup: {
        type: String,
        required: true
    },
    imageUrlGroup: {
        type: String,
        required: true
    },
    totalMember: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    }
    // members: {
    //     _id: {
    //         type: String,
    //         required: true
    //     },
    //     googleId: {
    //         type: String,
    //         required: true
    //     },
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         required: true
    //     },
    //     imageUrl: {
    //         type: String,
    //         required: true
    //     },
    //     // infoOnline: {
    //     //     type: String,
    //     //     required: true
    //     // },
    //     // givenName: {
    //     //     type: String,

    //     // }
    // },
}, {
    timestamps: true
})

module.exports = mongoose.model('signingroup', signinGroup)