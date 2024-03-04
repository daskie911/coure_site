const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("reg");
});

router.post("/", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.redirect("/");
    } else {
      const user = new User({
        username,
        password: hashedPassword,
        email,
      });
      await user.save();
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
