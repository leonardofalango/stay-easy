const bodyParser = require('body-parser')
const userRoutes = require('./userRoutes')
const mailRoutes = require('./mailRoutes')
const paymentRoutes = require('./paymentRoutes')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
    )

    app.use("/user", userRoutes)

    app.use("/mail", mailRoutes)

    app.use("/payment", paymentRoutes)
}