const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // To handle JSON data

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
