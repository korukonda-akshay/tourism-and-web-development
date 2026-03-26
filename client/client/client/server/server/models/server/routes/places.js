const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// Get all places
router.get("/", async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

// Add sample place
router.post("/add", async (req, res) => {
    const place = new Place(req.body);
    await place.save();
    res.json(place);
});

// Add review
router.post("/review", async (req, res) => {
    const { name, review } = req.body;

    const place = await Place.findOne({ name });
    if (place) {
        place.reviews.push(review);
        await place.save();
        res.json(place);
    } else {
        res.status(404).json({ message: "Place not found" });
    }
});

module.exports = router;
