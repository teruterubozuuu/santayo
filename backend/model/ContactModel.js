const mongoose = require("mongoose");

// Define the Product schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Register the model with Mongoose

const UserModel = mongoose.model("feedback", userSchema);

module.exports = UserModel; // Export the model
