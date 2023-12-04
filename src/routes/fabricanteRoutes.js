const express = require('express')
const fabricanteRoutes = express.Router()
const fabricanteController = require('../controllers/fabricanteController')

fabricanteRoutes.get('/fabricantes', fabricanteController.index)
fabricanteRoutes.post('/fabricantes', fabricanteController.store)
fabricanteRoutes.get('/fabricantes/:id', fabricanteController.show)
fabricanteRoutes.put('/fabricantes/:id', fabricanteController.update)
fabricanteRoutes.delete('/fabricantes/:id', fabricanteController.delete)

module.exports = fabricanteRoutes

