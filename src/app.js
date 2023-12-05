const express = require('express')
const appRoutes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(appRoutes)

module.exports = app