require('dotenv').config();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const Roles = ['customer', 'admin'];

const getAllUsers = async (req, res) => {
  res.json(await User.find({}));
};

const getUser = async (req, res) => {
  res.json(req.user);
};

const createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });

    if ((await User.findOne({ email: user.email })) !== null) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = await User.create(user);
    return res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const includepart = ['name', 'email', 'password', 'role'];

    const user = await User.findOne({ name: req.params.name });

    const newUser = Object.keys(req.body).forEach((key) => {
      if (includepart.includes(key)) {
        user[key] = req.body[key];
      }
    });

    const updatedUser = await user.save();

    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.remove(req.user);
  } catch (err) {
    res.status(500).json({ message: 'Fail to delete user' });
  }
};

const getnameUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findOne({ name: req.params.name });

    if (!user || user === undefined) {
      return res.status(404).json({ message: 'NotFound' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  req.user = user;
  next();
};

const acessToken = async (req, res) => {
  const user = { name: req.body.name, password: req.body.password };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY);
  res.json({ accessToken: accessToken });
};

const authToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization required' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: 'You dont have permission to access' });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getnameUser,
  acessToken,
  authToken,
};
