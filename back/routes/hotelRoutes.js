const express = require('express')
const router = express.Router()
const HotelController = require("../controller/HotelController")


router
    .get("/", HotelController.getAll)
    .post("/add", HotelController.add)
    .post("/update", HotelController.update)
    .post("/delete", HotelController.delete)
    .post("/search", HotelController.search) // falta esse
    .post("/getById", HotelController.getById)
    .post("/searchByOwner", HotelController.searchByOwner)
    .post("/searchByStatus", HotelController.searchByStatus)
    .post("/searchByPrice", HotelController.searchByPrice)
    .post("/searchByRating", HotelController.searchByRating)
    


module.exports = router