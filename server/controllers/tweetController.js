const multer = require('multer');
const cloudinary = require('../cloudinary');
const catchAsync = require('../utils/catchAsync');
const Tweet = require('../model/tweetModel');
const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const factory = require('./handlerFactory');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'img');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `tweet-img-${req.user._id}-${Date.now()}.${ext}`);
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image, Please upload images only.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadTweetPhoto = upload.single('photo');

exports.createTweet = catchAsync(async (req, res, next) => {
  const obj = {
    ...req.body,
    user: req.user._id
  };

  if (req.file) {
    const tweetPhoto = await cloudinary.uploader.upload(
      `img/${req.file.filename}`
    );
    obj.photo = tweetPhoto.secure_url;
  }

  let newTweet = await Tweet.create(obj);
  newTweet.content = newTweet._doc.content;
  newTweet.created = newTweet._doc.created;
  newTweet.photo = newTweet._doc.photo;
  newTweet.creator = req.user;

  res.status(200).json({
    status: 'success',
    data: {
      data: newTweet
    }
  });
});

exports.getAllTweets = catchAsync(async (req, res, next) => {
  const filter = {};
  if (req.params.username) {
    const user = await User.findOne({ username: req.params.username });
    filter.user = user._id;
  }

  const tweets = await Tweet.find(filter)
    .sort('-createdAt')
    .populate({ path: 'user' });

  res.status(200).json({
    status: 'success',
    results: tweets.length,
    data: {
      data: tweets
    }
  });
});

// exports.getTweet = factory.getOne(Tweet);
exports.deleteTweet = factory.deleteOne(Tweet);
