const bodyParser = require('body-parser')
const userRoutes = require('./userRoutes')
const hotelRoutes = require('./hotelRoutes')
const roomRoutes = require('./roomRoutes')
const authRoutes = require('./authRoutes')

const mailRoutes = require('./mailRoutes')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        userRoutes,
        hotelRoutes,
        roomRoutes,
        authRoutes
    )

    app.use("/user", userRoutes)

    app.use("/mail", mailRoutes)
}