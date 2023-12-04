const express = require('express')
const combustivelRoutes = express.Router()
const combustivelController = require('../controllers/combustivelController')

combustivelRoutes.get('/combustiveis', combustivelController.index)
combustivelRoutes.post('/combustiveis', combustivelController.store)
combustivelRoutes.get('/combustiveis/:id', combustivelController.show)
combustivelRoutes.put('/combustiveis/:id', combustivelController.update)
combustivelRoutes.delete('/combustiveis/:id', combustivelController.delete)

module.exports = combustivelRoutes