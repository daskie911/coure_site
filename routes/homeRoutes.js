const express = require("express");
const app = express();

let alert = {
  message: "",
  type: "",
};

app.get("/", (req, res) => {
  alert.message = "";
  alert.type = "";
  res.render("home", { alert });
});

module.exports = app;
