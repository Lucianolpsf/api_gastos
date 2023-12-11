const corModel = require('../models/corModel');

class corController {

	async index(req, res){
		try {
			const rows = await corModel.findAll();
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async store(req, res){
		try {
			const cor = req.body;
			const rows = await corModel.create(cor);
			res.status(201).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async show(req, res){
		try {
			const id = req.params.id;
			const rows = await corModel.findById(id);
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async update(req, res){
		try {
			const id = req.params.id;
			const cor = req.body;
			const rows = await corModel.update(cor,id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async delete(req, res){
		try {
			const id = req.params.id;
			const rows = await corModel.delete(id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
module.exports = new corController();