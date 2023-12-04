const express = require('express')
const despesaRoutes = express.Router()
const despesaController = require('../controllers/despesaController')

despesaRoutes.post('/despesas', despesaController.store)
despesaRoutes.get('/despesas', despesaController.index)
despesaRoutes.put('/despesas/:id', despesaController.update)
despesaRoutes.delete('/despesas/:id', despesaController.delete)
despesaRoutes.get('/despesas/:id', despesaController.show)

module.exports = despesaRoutes