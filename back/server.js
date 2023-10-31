const mongoose = require("mongoose")
require("dotenv").config()

module.exports = () => {
    mongoose
    .connect(process.env.SERVER)
    .then(() => console.log("db connected"))
    .catch((e) => console.error(`EROR: DB ERROR\n${e.message}`))
}
