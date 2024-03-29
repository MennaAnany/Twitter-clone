const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name']
  },
  username: {
    type: String,
    required: [true, 'Please provide your username!'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    validate: [validator.isEmail, 'please provide a valid email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: 8,
    select: false
  },

  passwordConfirmation: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords do not match!'
    }
  },
  photo: {
    type: String,
    default:
      'https://res.cloudinary.com/dgikv5itt/image/upload/v1694534816/default-avatar-icon-of-social-media-user-vector_sjuo2a.jpg'
  },
  cover: {
    type: String,
    default:
      'https://res.cloudinary.com/dgikv5itt/image/upload/v1694534555/fbdefault_mcvae3.png'
  },

  bio: {
    type: String,
    default: 'My profile😐'
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,

  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirmation = undefined;
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function(next) {
  // this >> points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
