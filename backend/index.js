const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
const authRoutes = require('./routes/authRoute');


app.use(cors());
app.use(express.json()); 

app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  }).catch(err => console.log(err));