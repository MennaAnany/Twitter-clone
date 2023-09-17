const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const tweetController = require('../controllers/tweetController');

const router = express.Router();

const { protect } = authenticationController;

// router.use(authenticationController.protect);

router
  .route('/')
  .post(protect, tweetController.uploadTweetPhoto, tweetController.createTweet)
  .get(protect, tweetController.getAllTweets);
// .get(tweetController.getAllTweets);

router.route('/:id').delete(tweetController.deleteTweet);

router.route('/:username').get(tweetController.getAllTweets);

module.exports = router;
