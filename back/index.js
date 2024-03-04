require('./server')()
require('./config/stripe')

const express = require("express")
const routes = require('./routes')
const cors = require("cors")
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
routes(app)

const port = process.env.PORT 
app.listen(port, () => console.log(`🚀🚀🚀 http://localhost:${port}`))