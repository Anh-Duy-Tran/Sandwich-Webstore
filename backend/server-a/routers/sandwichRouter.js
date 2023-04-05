const express = require('express');

const {
  getAllSandwich,
  getSandwich,
} = require('../controllers/sandwichControllers');

const sandwichRouter = express.Router();

sandwichRouter.route('/').get(getAllSandwich);

sandwichRouter.route('/:id').get(getSandwich);

module.exports = sandwichRouter;
