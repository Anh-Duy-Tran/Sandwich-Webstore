require('dotenv').config();
const User = require('../models/user.js');
const Sandwich = require('../models/sandwich');
const Order = require('../models/order.js');
const jwt = require('jsonwebtoken');

const getAllOrders = async (req, res) => {
  res.json(await Order.find({}));
};

const getOrderUSer = async (req, res) => {
  const user = await User.findOne({ name: req.user.name });
  const order = await Order.find({ customerId: user });
};

const createOrder = async (req, res) => {
  try {
    const order = new Order();
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getAllOrders, createOrder, getOrderUSer };
