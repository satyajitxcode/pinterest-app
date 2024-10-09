const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/PinterestAppPractice");

const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now, // Sets the current date and time when the post is created
    },
    likes: {
        type: Array, // stores id of user who liked
        default: [], // Initializes likes to 0
    },
    // Uncomment the following line if you want to link the post to a user
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
