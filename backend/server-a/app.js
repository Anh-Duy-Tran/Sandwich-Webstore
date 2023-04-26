const express = require('express');
const cors = require('cors');

const sandwichRouter = require('./routers/sandwichRouter');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/sandwich', sandwichRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/order', orderRouter);

module.exports = app;
