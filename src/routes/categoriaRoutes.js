const express = require('express')
const categoriaRoutes = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRoutes.get('/categoria', categoriaController.index)
categoriaRoutes.post('/categoria', categoriaController.store)
categoriaRoutes.get('/categoria/:id', categoriaController.show)
categoriaRoutes.put('/categoria/:id', categoriaController.update)
categoriaRoutes.delete('/categoria/:id', categoriaController.delete)

module.exports = categoriaRoutes

