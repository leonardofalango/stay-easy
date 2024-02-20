const bodyParser = require('body-parser')
const userRoutes = require('./userRoutes')
const hotelRoutes = require('./hotelRoutes')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        userRoutes,
        // hotelRoutes
    )

}