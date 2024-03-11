const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

module.exports = model("Card", cardSchema);
