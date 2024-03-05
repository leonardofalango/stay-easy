const express = require("express")
const PaymentController = require("../controller/PaymentController")
const router = express.Router()


router
    .get("/", (req, res) => res.send("Hello from payment routes"))
    .post("/add", PaymentController.createPaymentIntent)

module.exports = router