const server = require('./server')()
const express = require("express")
const routes = require('./routes')
const cors = require("cors")
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
routes(app)

const port = 8080
app.listen(port, () => console.log(`🚀🚀🚀 http://localhost:${port}`))