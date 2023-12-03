const express = require('express')
const veiculoRoutes = require('./routes/veiculoRoutes')

const app = express()

app.use(express.json())
app.use(veiculoRoutes)

module.exports = app