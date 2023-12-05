const express = require('express')
const combustivelRoutes = express.Router()
const combustivelController = require('../controllers/combustivelController')

combustivelRoutes.get('/combustivel', combustivelController.index)
combustivelRoutes.post('/combustivel', combustivelController.store)
combustivelRoutes.get('/combustivel/:id', combustivelController.show)
combustivelRoutes.put('/combustivel/:id', combustivelController.update)
combustivelRoutes.delete('/combustivel/:id', combustivelController.delete)

module.exports = combustivelRoutes