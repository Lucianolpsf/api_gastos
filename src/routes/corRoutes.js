const express = require('express')
const corRoutes = express.Router()
const corController = require('../controllers/corController')

corRoutes.get('/cores', corController.index)
corRoutes.post('/cores', corController.store)
corRoutes.get('/cores/:id', corController.show)
corRoutes.put('/cores/:id', corController.update)
corRoutes.delete('/cores/:id', corController.delete)

module.exports = corRoutes

