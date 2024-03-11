const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("showCards");
});

module.exports = router;

