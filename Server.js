const express = require("express");
const app = express();

const data = require("d:/CODING/Java/TopRepositories.json")

require('dotenv').config()

const Port = process.env.PORT ;

app.get("/lymore/topRepositories", (req, res) => {
  res.json(data);
});

app.listen(Port, () => {
  console.log("server running on port " + Port);
});
