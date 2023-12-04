const express = require('express')
const appRoutes = require('./routes/indexRoutes')

const app = express()

app.use(express.json())
app.use(appRoutes)

module.exports = app