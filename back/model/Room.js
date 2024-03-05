const mongoose = require("mongoose");


const RoomSchema = new mongoose.Schema({
    
    hotelID : { type : mongoose.Schema.Types.ObjectId,ref: 'Hotel',required: true,},
    amenities: { type : Array },
    bed: { type : Number },
    images: { type : Array },
    people: { type : Number },
    price: { type : Number },

}, { timestamps: {} });

module.exports = mongoose.model('Room', RoomSchema);