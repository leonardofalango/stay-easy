const express = require('express')
const RoomController = require('../controller/RoomController')

''

const router = express.Router()

router
    .get("/room", RoomController.getAll)
    .get("/room/:id", RoomController.getById)
    .post("/room/add", RoomController.create)
    .post("/room/update/:id", RoomController.update)
    .post("/room/updateStatus/:id", RoomController.updateStatus)
    



module.exports = router