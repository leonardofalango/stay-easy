const mongoose = require("mongoose");


const RoomSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    hotelId: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Array, required: true },
    amenities: { type: Array, required: true },
    checkin: { type: String, required: true },
    checkout: { type: String, required: true },
    payment: { type: String, required: true },
    status: { type: String, required: true },

}, { timestamps: {} });

module.exports = mongoose.model('Room', RoomSchema);