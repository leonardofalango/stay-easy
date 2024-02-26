const bodyParser = require('body-parser')
const userRoutes = require('./userRoutes')
const hotelRoutes = require('./hotelRoutes')
const roomRoutes = require('./roomRoutes')
const authRoutes = require('./authRoutes')


module.exports = (app) => {
    app.use(
        bodyParser.json(),
        userRoutes,
        hotelRoutes,
        roomRoutes,
        authRoutes
    )

}