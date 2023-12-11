const express = require('express');
const veiculoRoutes = express.Router();
const veiculoController = require('../controllers/veiculoController');

veiculoRoutes.get('/veiculo', veiculoController.index);
veiculoRoutes.post('/veiculo', veiculoController.store);
veiculoRoutes.get('/veiculo/:id', veiculoController.show);
veiculoRoutes.put('/veiculo/:id', veiculoController.update);
veiculoRoutes.delete('/veiculo/:id', veiculoController.delete);

module.exports = veiculoRoutes;