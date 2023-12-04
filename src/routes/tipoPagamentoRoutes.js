const express = require('express')
const tipoPagamentoRoutes = express.Router()
const tipoPagamentoController = require('../controllers/tipoPagamentoController')

tipoPagamentoRoutes.get('/tipoPagamentos', tipoPagamentoController.index)
tipoPagamentoRoutes.post('/tipoPagamentos', tipoPagamentoController.store)
tipoPagamentoRoutes.get('/tipoPagamentos/:id', tipoPagamentoController.show)
tipoPagamentoRoutes.put('/tipoPagamentos/:id', tipoPagamentoController.update)
tipoPagamentoRoutes.delete('/tipoPagamentos/:id', tipoPagamentoController.delete)

module.exports = tipoPagamentoRoutes

