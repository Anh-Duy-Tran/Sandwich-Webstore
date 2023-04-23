const express = require('express');

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getnameUser,
  login,
  authToken,
} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter
  .route('/login')
  .post(login)
  .get(authToken, (req, res) => res.status(200).end());

userRouter
  .route('/:name')
  .get(getnameUser, getUser)
  .patch(getnameUser, authToken, updateUser)
  .delete(getnameUser, authToken, deleteUser);

module.exports = userRouter;
