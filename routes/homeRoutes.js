const express = require("express");
const app = express();

let alert = {
  message: "",
  type: "",
};

app.get("/", function (req, res) {
  const isSuccess = true;
  const message = "User exists";
  res.render("home", { isSuccess: isSuccess, message: message });
});

module.exports = app;
