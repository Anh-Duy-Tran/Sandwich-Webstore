const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  //   console.log(process.env.DATABASE_URL);
  mongoose
    .connect('mongodb://localhost:27017/WebShopDb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('DB connected');
    })
    .catch((err) => {
      console.log('error connecting to MongoDB:', err.message);
    });
};

const disconnectDB = () => {
  mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };
