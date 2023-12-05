const express = require('express')
const tipoPagamentoRoutes = express.Router()
const tipoPagamentoController = require('../controllers/tipoPagamentoController')

tipoPagamentoRoutes.get('/tipoPagamento', tipoPagamentoController.index)
tipoPagamentoRoutes.post('/tipoPagamento', tipoPagamentoController.store)
tipoPagamentoRoutes.get('/tipoPagamento/:id', tipoPagamentoController.show)
tipoPagamentoRoutes.put('/tipoPagamento/:id', tipoPagamentoController.update)
tipoPagamentoRoutes.delete('/tipoPagamento/:id', tipoPagamentoController.delete)

module.exports = tipoPagamentoRoutes

