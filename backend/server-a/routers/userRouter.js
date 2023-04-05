const express = require('express');

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getnameUser,
} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getnameUser, getAllUsers).post(createUser);

userRouter.route('/login');

userRouter.route('/logout');

userRouter
  .route('/:username')
  .get(getnameUser, getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
