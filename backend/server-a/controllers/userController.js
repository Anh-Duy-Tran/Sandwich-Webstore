const User = require("../models/user.js");

const Roles = ["customer", "admin"];

const getAllUsers = async (req, res) => {
  res.json(await User.find({}).exec());
};

const getUser = async (req, res) => {
  res.json(req.user);
};

const createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });

    if ((await User.findOne({ email: newUser.email })) !== null) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create(user);
    return res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: "Fail to create user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.update(req.user, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(404).json({ message: "Fail to update user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
  } catch (err) {
    res.status(500).json({ message: "Fail to delete user" });
  }
};

const getnameUser = async (req, res, next) => {
  let user;
  try {
    const user = await User.findOne({ name: req.body });

    if (!user) {
      return res.status(404).json({ message: "NotFound" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getnameUser,
};
