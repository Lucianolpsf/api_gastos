const express = require('express')
const veiculoRoutes = express.Router()
const veiculoController = require('../controllers/veiculoController')

veiculoRoutes.get('/veiculos', veiculoController.index)
veiculoRoutes.post('/veiculos', veiculoController.store)
veiculoRoutes.get('/veiculos/:id', veiculoController.show)
veiculoRoutes.put('/veiculos/:id', veiculoController.update)
veiculoRoutes.delete('/veiculos/:id', veiculoController.delete)

module.exports = veiculoRoutes