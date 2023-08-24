const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const tweetController = require('../controllers/tweetController');

const router = express.Router();

router.use(authenticationController.protect);

router
  .route('/')
  .post(tweetController.uploadTweetPhoto, tweetController.createTweet)
  .get(tweetController.getAllTweets);
// .get(tweetController.getAllTweets);

router
  .route('/:id')
  // .get(tweetController.getTweets)
  .delete(tweetController.deleteTweet);

module.exports = router;
