const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const inputData = new Schema({
    image: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jabatan: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('inputdata', inputData)