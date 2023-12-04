const express = require('express')
const veiculoRoutes = require('./routes/veiculoRoutes')
const categoriaRoutes = require('./routes/categoriaRoutes')
const app = express()

app.use(express.json())
app.use(veiculoRoutes)
app.use(categoriaRoutes)

module.exports = app