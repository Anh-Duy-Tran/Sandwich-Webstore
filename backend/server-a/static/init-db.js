const { connectDB, disconnectDB } = require("../models/db");

const sandwiches = require("./sandwiches.json").map((product) => ({
  ...product,
}));

(async () => {
  connectDB();

  try {
    const sandwich = require("../models/sandwich");
    await sandwich.deleteMany({});
    await sandwich.create(sandwiches);
    console.log("Created products");
  } catch (error) {
    console.log(error);
  }

  disconnectDB();
})();
