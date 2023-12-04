const express = require('express')
const postoCombustivelRoutes = express.Router()
const postoCombustivelController = require('../controllers/postoCombustivelController')

postoCombustivelRoutes.get('/postoCombustiveis', postoCombustivelController.index)
postoCombustivelRoutes.post('/postoCombustiveis', postoCombustivelController.store)
postoCombustivelRoutes.get('/postoCombustiveis/:id', postoCombustivelController.show)
postoCombustivelRoutes.put('/postoCombustiveis/:id', postoCombustivelController.update)
postoCombustivelRoutes.delete('/postoCombustiveis/:id', postoCombustivelController.delete)

module.exports = postoCombustivelRoutes

