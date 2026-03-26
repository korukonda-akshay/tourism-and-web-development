const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    reviews: [String]
});

module.exports = mongoose.model("Place", PlaceSchema);
