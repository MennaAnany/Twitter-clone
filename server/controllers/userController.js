const catchAsync = require('../utils/catchAsync');
const User = require('../model/userModel');
const factory = require('./handlerFactory');
const multer = require('multer');
// const cloudinary = require('cloudinary');
const cloudinary = require('../cloudinary');
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.files.photo) return next();

  req.files.photo[0].filename = `user-photo-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.files.photo[0].buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`img/${req.files.photo[0].filename}`);

  next();
});

exports.resizeUserCover = catchAsync(async (req, res, next) => {
  if (!req.files.cover) return next();

  req.files.cover[0].filename = `user-cover-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.files.cover[0].buffer)
    .resize({ width: 354, height: 174 })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`img/${req.files.cover[0].filename}`);

  next();
});

exports.UploadPhoto = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'cover', maxCount: 1 }
]);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.username = req.user.username;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirmation) {
    return next(new AppError('This route is not for updating password .', 400));
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'username', 'bio', 'email');

  if (req.files) {
    if (req.files.cover) {
      const coverPhoto = await cloudinary.uploader.upload(
        `img/${req.files.cover[0].filename}`
      );
      filteredBody.cover = coverPhoto.secure_url;

      console.log(coverPhoto);
    }
    if (req.files.photo) {
      const photo = await cloudinary.uploader.upload(
        `img/${req.files.photo[0].filename}`
      );
      filteredBody.photo = photo.secure_url;

      console.log(photo);
    }
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

// Deactivate account
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.user.id), { active: false };

  res.status(200).json({
    status: 'success',
    data: null
  });
});

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
// do not update password with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
