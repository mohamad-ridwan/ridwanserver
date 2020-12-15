const inputdata = require('../models/inputdata')
const inputData = require('../models/inputdata')
const fs = require('fs')
const path = require('path')

// POST
exports.postInput = (req, res, next) => {
    const image = req.file.path
    const nama = req.body.nama
    const jabatan = req.body.jabatan

    // Post to mongoDB
    const Posting = new inputData({
        image: image,
        nama: nama,
        jabatan: jabatan
    })

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: "Data Input berhasil di tambahkan!",
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// GET
exports.getInput = (req, res, next) => {
    let totalItems;

    inputData.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return inputData.find()
        })
        .then(result => {
            res.status(200).json({
                message: "Data input berhasil di dapatkan!",
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}

// const removeImage = (filepath) => {
//     console.log(filepath);
//     console.log('dir name: ', __dirname);

//     filepath = path.join(__dirname, '../..', filepath);
//     fs.unlink("file path :", filepath, err => console.log(err))
// }

// DELETE
exports.deleteInput = (req, res, next) => {
    const id = req.params.id

    inputData.findById(id)
        .then(result => {
            res.status(200).json({
                message: "Data berhasil di hapus!",
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}