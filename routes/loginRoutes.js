const { Router } = require("express");
const router = new Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("login", { error: "" });
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;
    const candidate = await User.findOne({ email });

    if (!candidate) {
      console.log("User not found");
      return res.redirect("/");
    } else {
      console.log("User found");
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
