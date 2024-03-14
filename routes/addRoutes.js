const bcrypt = require("bcryptjs");
const { Router } = require("express");

const router = new Router();
const User = require("../models/User");
const Card = require("../models/Card"); // Import the Card model
router.get("/", (req, res) => {
  res.render("addCard", { error: "" });
});

router.post("/", async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const card = new Card({
      title,
      description,
      img,
    });
    await card.save();
    res.redirect("/showCards");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
