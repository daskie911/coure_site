const bcrypt = require("bcryptjs");
const { Router } = require("express");

const router = new Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("login", { error: "" });
});

router.post("/", async (req, res) => {
  try {
    const { password, email } = req.body;
    const candidate = await User.findOne({ email });

    if (!candidate) {
      console.log("User not found");
      res.render("login", { error: "Invalid email" });
    } else {
      const areSame = await bcrypt.compare(password, candidate.password);
      if (!areSame) {
        return res.render("login", { error: "Invalid password" });
      }
      console.log("User found");
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
