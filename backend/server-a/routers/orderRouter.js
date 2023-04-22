const express = require('express');

const {} = require('../controllers/sandwichControllers');

const authToken = require('../controllers/userController');

const orderRouter = express.Router();

orderRouter.use(authToken);

orderRouter.route('/').get(getAllOrders).post(createOrder);

orderRouter.route('/:id').get(getOrderUser);

module.exports = orderRouter;
