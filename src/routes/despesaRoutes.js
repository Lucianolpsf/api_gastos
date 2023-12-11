const express = require('express');
const despesaRoutes = express.Router();
const despesaController = require('../controllers/despesaController');

despesaRoutes.post('/despesa', despesaController.store);
despesaRoutes.get('/despesa', despesaController.index);
despesaRoutes.put('/despesa/:id', despesaController.update);
despesaRoutes.delete('/despesa/:id', despesaController.delete);
despesaRoutes.get('/despesa/:id', despesaController.show);

module.exports = despesaRoutes;