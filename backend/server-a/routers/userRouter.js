const express = require('express');

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getnameUser,
  acessToken,
  authToken,
} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/login').post(acessToken);

userRouter.route('/logout');

userRouter
  .route('/:name')
  .get(getnameUser, getUser)
  .patch(getnameUser, authToken, updateUser)
  .delete(getnameUser, authToken, deleteUser);

module.exports = userRouter;
