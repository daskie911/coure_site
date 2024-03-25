const express = require("express");
const router = express.Router();
const Favourite = require("../models/Favourite");

router.get("/", async (req, res) => {
  const favourite = await Favourite.find();
  res.render("favourite", { favourite });
});

router.post("/add", async (req, res) => {
  try {
    let { productId, title, img } = req.body;
    let newFavourite = new Favourite({ productId, title, img });
    await newFavourite.save();
    res.redirect("/fav");
  } catch (err) {
    console.log(err);
  }
});

router.post("/remove/:id", async (req, res) => {
  try {
    let favouriteId = await Favourite.deleteOne(req.body.id);
    res.redirect("/fav");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
