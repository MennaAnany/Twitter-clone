const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const userController = require('../controllers/userController');
const router = express.Router();
const { protect } = authenticationController;

router.post('/signup', authenticationController.signup);
router.post('/signin', authenticationController.signin);
router.get('/signout', authenticationController.signout);

router.get('/me', protect, userController.getMe, userController.getUser);

router.post(
  '/updateMe',
  protect,
  userController.UploadPhoto,
  userController.resizeUserCover,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.get('/:username', userController.getUser);
router.delete('/deleteMe', userController.deleteMe);
router.get('/', userController.getAllUsers);

router.route('/:id').delete(protect, userController.deleteUser);

module.exports = router;
