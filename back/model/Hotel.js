const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    hotelDescription: { type : String },
    destination: { type : String },
    stars: { type : Number },
    images: { type : Array }

}, { timestamps: {} });

module.exports = mongoose.model('Hotel', HotelSchema);