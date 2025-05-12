const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const username = req.query.name;
  // Vulnerable to XSS: Directly embedding user input in response
  res.send(`Hello, ${username}`);
});
