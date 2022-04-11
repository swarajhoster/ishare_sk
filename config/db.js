const mongoose = require("mongoose");

function connectDB() {
  // Database connection 🥳
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((a) => {
      console.log("Database connected to: ", a.connection.host);
    })
    .catch((err) => {
      console.log("Connection failed", err);
    });
}

module.exports = connectDB;
