

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
const UserModel = require("./model/UserModel")

app.use(cors());
app.use(express.json()); // To handle JSON data

mongoose.connect("mongodb://localhost:27017/users");


app.post("/",(req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.listen(5000, () => {
  console.log(`Server running`);
});

