const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');



mongoose.connect("mongodb://127.0.0.1:27017/PinterestAppPractice");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp: {
    type: String, // Assuming dp is a URL to the image. You can change the type if needed.
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/ // Basic email format validation
  },
  fullName: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // This adds createdAt and updatedAt timestamps

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
