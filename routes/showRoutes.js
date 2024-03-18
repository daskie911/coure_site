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

router.get("/:id", async (req, res) => {
  try {
    const product = await Card.findById(req.params.id);
    res.render("product", { product });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
