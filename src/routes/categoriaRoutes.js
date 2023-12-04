const express = require('express')
const categoriaRoutes = express.Router()
const categoriaController = require('../controllers/categoriaController')

categoriaRoutes.get('/categorias', categoriaController.index)
categoriaRoutes.post('/categorias', categoriaController.store)
categoriaRoutes.get('/categorias/:id', categoriaController.show)
categoriaRoutes.put('/categorias/:id', categoriaController.update)
categoriaRoutes.delete('/categorias/:id', categoriaController.delete)

module.exports = categoriaRoutes

