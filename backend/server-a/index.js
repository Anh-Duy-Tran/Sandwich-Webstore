require('dotenv').config();
const { connectDB, disconnectDB } = require("./models/db");

connectDB();
const app = require('./app');
const { getTask } = require('./rabbit-utils/receiveTask');

const rabbitReceiver = getTask('rapid-runner-rabbit', 'completed-orders');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
