require('dotenv').config();
const User = require('../models/user.js');
const Sandwich = require('../models/sandwich');
const Order = require('../models/order.js');
const jwt = require('jsonwebtoken');

const getAllOrders = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res
      .status(403)
      .json({ message: 'You dont have permission to access' });
  }
  res.json(await Order.find({}));
};

const getOrderUSer = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    console.log(req.user.email);
    const order = await Order.find({ customerId: user._id });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const order = new Order({ ...req.body, customerId: user._id });
    const newOrder = await Order.create(order);
    return res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ email: req.user.email });
    const order = await Order.find({ _id: id });

    if (user._id !== order._id && user.role !== 'admin') {
      return res
        .status(403)
        .json({ message: 'You dont have permission to access' });
    }

    await Order.deleteOne({ _id: id });
    return res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAllOrders, createOrder, getOrderUSer, deleteOrder };
