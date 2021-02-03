const express = require('express')
const router = express.Router()
const Post = require('../models/Post')


exports.getPosts = async(req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)

}

exports.createPost = async (req, res) => {

    const postData = {
        title: req.body.title,
        text: req.body.text
        // author: ....
    }

    const post = new Post(postData)

    await post.save()
    res.status(201).json(post)

}

exports.deletePost = async (req, res) => {
    await  Post.remove({_id: req.params.id})
    res.status(200).json({
        message:'Deleted'
    })
}

// exports.updatePost = async (req, res) => {
//     await
// }
