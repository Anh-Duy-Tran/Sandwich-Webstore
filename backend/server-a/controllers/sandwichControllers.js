const Sandwich = require('../models/sandwich');

const getAllSandwich = async (req, res) => {
  res.json(await Sandwich.find({}));
};

const getSandwich = async (req, res) => {
  const sandwich = await Sandwich.findById(req.params.id);
  if (!sandwich) {
    return res.status(404).end();
  }
  res.json(sandwich);
};

module.exports = { getAllSandwich, getSandwich };
