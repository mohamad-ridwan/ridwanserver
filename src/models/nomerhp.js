const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nomerHp = new Schema({
    phoneUser: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('nomer hp', nomerHp)