const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.render("showCards", { cards });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
