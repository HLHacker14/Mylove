const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Mylove API is running!"
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello from Node.js!"
  });
});

module.exports.handler = serverless(app);