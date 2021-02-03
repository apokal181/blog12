const {Schema, model, Types} = require('mongoose')

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
})


module.exports = model('posts', postSchema)