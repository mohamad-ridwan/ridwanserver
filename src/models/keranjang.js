const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataKeranjang = new Schema({
    idUser: {
        type: String,
        required: true,
    },
    idProduct: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('datakeranjang', dataKeranjang)