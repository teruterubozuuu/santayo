const mongoose = require('mongoose');

// Define the Product schema

const userSchema = new mongoose.Schema({

  email: String,
  password: String,

});

// Register the model with Mongoose

const UserModel = mongoose.model('userdetails', userSchema);

module.exports = UserModel; // Export the model