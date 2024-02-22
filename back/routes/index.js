const bodyParser = require('body-parser')
const userRoutes = require('./userRoutes')
const mailRoutes = require('./mailRoutes')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
    )

    app.use("/user", userRoutes)

    app.use("/mail", mailRoutes)
}