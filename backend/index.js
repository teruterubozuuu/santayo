const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./model/UserModel");
const ContactModel = require("./model/ContactModel");

app.use(cors());
app.use(express.json()); // To handle JSON data

mongoose.connect("mongodb://localhost:27017/");

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback." });
  }
});

app.post("/", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log(`Server running`);
});
