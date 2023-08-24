const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authenticationController.signup);
router.get('/signin', authenticationController.signin);
router.get('/signout', authenticationController.signout);

router.use(authenticationController.protect);

router.get('/me', userController.getMe, userController.getUser);

router.post(
  '/updateMe',
  userController.UploadPhoto,
  userController.resizeUserCover,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.get('/:username', userController.getUser);
router.delete('/deleteMe', userController.deleteMe);
router.get('/', userController.getAllUsers);

router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
