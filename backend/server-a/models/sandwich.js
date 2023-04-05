const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sanwichSchema = new Schema({
  name: {
    type: String,
    required: [true, "A sandwich must have a name"],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A sandwich must have a price"],
  },
  image: {
    type: String,
    required: [true, "A tour must have a maxGroupSize"],
  },
  description: {
    type: String,
    required: [true, "A tour must have a maxGroupSize"],
  },
  toppings: {
    type: [Object],
  },
  breadType: {
    type: String,
    required: [true, "A tour must have a maxGroupSize"],
  },
});

const Sandwich = mongoose.model("sandwich", sanwichSchema);

module.exports = Sandwich;
