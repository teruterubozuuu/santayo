const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // To handle JSON data

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'santayo',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to santayo database'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
