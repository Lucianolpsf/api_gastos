const express = require('express')
const fabricanteRoutes = express.Router()
const fabricanteController = require('../controllers/fabricanteController')

fabricanteRoutes.get('/fabricante', fabricanteController.index)
fabricanteRoutes.post('/fabricante', fabricanteController.store)
fabricanteRoutes.get('/fabricante/:id', fabricanteController.show)
fabricanteRoutes.put('/fabricante/:id', fabricanteController.update)
fabricanteRoutes.delete('/fabricante/:id', fabricanteController.delete)

module.exports = fabricanteRoutes

