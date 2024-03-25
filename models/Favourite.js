const { Schema, model } = require("mongoose");

const favSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Card",
  },
  title: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
});

module.exports = model("Fav", favSchema);
