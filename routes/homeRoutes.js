const express = require("express");
const app = express();

let alert = {
  message: "",
  type: "",
};

app.get("/", (req, res) => {
  res.render("home", { alert });
  alert.message = "";
  alert.type = "";
});

module.exports = app;
