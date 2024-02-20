const express = require('express')
const router = express.Router()
const UserController = require("../controller/UserController")


router
    .get("/user", UserController.getAll)
    .post("/user/add", UserController.add)
    .post("/user/update", UserController.update)
    .post("/user/delete", UserController.delete)
    .post("/user/login", UserController.login)


module.exports = router