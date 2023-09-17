const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String
  },
  photo: {
    type: String
  },
  video: String
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
