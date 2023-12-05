const express = require('express')
const corRoutes = express.Router()
const corController = require('../controllers/corController')

corRoutes.get('/cor', corController.index)
corRoutes.post('/cor', corController.store)
corRoutes.get('/cor/:id', corController.show)
corRoutes.put('/cor/:id', corController.update)
corRoutes.delete('/cor/:id', corController.delete)

module.exports = corRoutes

