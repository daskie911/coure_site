const express = require("express");
const router = express.Router();
const Favourite = require("../models/Favourite");

router.get("/", async (req, res) => {
  const favourite = await Favourite.find();
  res.render("favourite", { favourite });
});

router.post("/add", async (req, res) => {
  try {
    const productId = await Card.findById(req.body.id);
    const product = await Card.findOne({ productId });
    const newFavourite = new Favourite({
      productId,
      //product
    });
    await newFavourite.save();
    res.redirect("/fav");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
