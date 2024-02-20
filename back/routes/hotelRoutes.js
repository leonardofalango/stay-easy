const express = require('express')
const HotelController = require("../controller/HotelController")


const router = express.Router()
router
    .get("/hotel", HotelController.getAll)
    .post("/hotel/add", HotelController.add)
    .post("/hotel/update", HotelController.update)
    .post("/hotel/delete", HotelController.delete)
    .post("/hotel/searchByOwner", HotelController.searchByOwner)
    .post("/hotel/searchByStatus", HotelController.searchByStatus)
    .post("/hotel/searchByPrice", HotelController.searchByPrice)
    .post("/hotel/searchByRating", HotelController.searchByRating)
    


module.exports = router