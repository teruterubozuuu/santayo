const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

// Middleware

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/santayo', {

    useNewUrlParser: true,
  
    useUnifiedTopology: true,
  
  }).then(() => {
  
    console.log('Connected to MongoDB');
  
    app.listen(5000, () => {
  
      console.log('Server running on port 5000');
  
    });
  
  }).catch(err => console.log(err));