const {validationResult} = require('express-validator');
const BlogPost = require('../models/blog');

// POST
exports.createBlogPost = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input Value tidak sesuai');
        err.errorStatus = 400
        err.data = errors.array();
        throw err;
    }

    if(!req.file){
        const err = new Error('Image Harus di Upload');
        err.errorStatus = 422
        // err.data = errors.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    // Database Dynamic
    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {uId: 1, name: "Mohamad Ridwan"}
    })

    // Save Posting to database mongo DB
    Posting.save()
    .then((result)=>{
        res.status(201).json({
            message : 'Create Blog Post Success!!!',
            dataBlog: result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET
exports.getAllBlogPost = (req, res, next)=>{
    BlogPost.find()
    .then(result=>{
        res.status(200).json({
            message: "Data Berhasil Di panggil",
            data: result
        })
    })
    .catch(err=>{
        next(err);
    })
}

// GET Api with params ID
exports.getBlogPostById = (req, res, next)=>{
    const postId = req.params.postId
    BlogPost.findById(postId)
    .then(result=>{
        // Handling kesalahan pemanggilan ID
        if(!result){
            const error = new Error('data Blog Post not Found!!');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Data Blog Post Get Success!!",
            data: result
        })
    })
    .catch(err=>{
        next(err)
    })
}