const express = require('express')
const router = express.Router()
const UserController = require("../controller/UserController")


router
    .get("/", UserController.getAll)
    .post("/add", UserController.add)
    .post("/update", UserController.update)
    .post("/delete", UserController.delete)


module.exports = router