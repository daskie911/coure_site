const { Schema, model } = require("mongoose");

const favSchema = new Schema({
    producId: {
        type: Schema.Types.ObjectId,
        ref: "Card"
    }
})

module.exports = model("Fav", favSchema);