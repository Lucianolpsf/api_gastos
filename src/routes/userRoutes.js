const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.get('/user', userController.index);
userRoutes.post('/user', userController.store);
userRoutes.get('/user/:id', userController.show);
userRoutes.put('/user/:id', userController.update);
userRoutes.delete('/user/:id', userController.delete);

module.exports = userRoutes;

