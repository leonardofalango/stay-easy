const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    address: { type: Object,  required: true },
    rooms: { type: Array, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Array, required: true },
    amenities: { type: Array, required: true },
    services: { type: Array, required: true },
    rules: { type: Array, required: true },
    checkin: { type: String, required: true },
    checkout: { type: String, required: true },
    cancellation: { type: String, required: true },
    payment: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: {} });

module.exports = mongoose.model('Hotel', HotelSchema);