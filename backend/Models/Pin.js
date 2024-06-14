const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        minlength: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    long: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.models.Pin || mongoose.model("Pin", PinSchema);