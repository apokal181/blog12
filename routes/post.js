const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const PostController = require('../controllers/PostController')


router.get('/', PostController.getPosts )


router.post('/', PostController.createPost )

router.delete('/:id', PostController.deletePost )



module.exports = router