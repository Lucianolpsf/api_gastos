const express = require('express');
const abastecimentoRoutes = express.Router();
const abastecimentoController = require('../controllers/abastecimentoController');

abastecimentoRoutes.post('/abastecimento', abastecimentoController.store);
abastecimentoRoutes.get('/abastecimento', abastecimentoController.index);
abastecimentoRoutes.put('/abastecimento/:id', abastecimentoController.update);
abastecimentoRoutes.delete('/abastecimento/:id', abastecimentoController.delete);
abastecimentoRoutes.get('/abastecimento/:id', abastecimentoController.show);

module.exports = abastecimentoRoutes;