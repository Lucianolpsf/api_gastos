const express = require('express')
const postoCombustivelRoutes = express.Router()
const postoCombustivelController = require('../controllers/postoCombustivelController')

postoCombustivelRoutes.get('/postoCombustivel', postoCombustivelController.index)
postoCombustivelRoutes.post('/postoCombustivel', postoCombustivelController.store)
postoCombustivelRoutes.get('/postoCombustivel/:id', postoCombustivelController.show)
postoCombustivelRoutes.put('/postoCombustivel/:id', postoCombustivelController.update)
postoCombustivelRoutes.delete('/postoCombustivel/:id', postoCombustivelController.delete)

module.exports = postoCombustivelRoutes

