const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  },
  photo: String,
  video: String
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
