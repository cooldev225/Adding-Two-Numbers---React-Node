const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  let result = +firstNumber + +secondNumber;
  res.json({ result: result });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
