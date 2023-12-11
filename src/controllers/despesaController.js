const despesaModel = require('../models/despesaModel');

class despesaController {

	async index(req, res){
		try {
			const rows = await despesaModel.findAll();
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async store(req, res){
		try {
			const despesa = req.body;
			const rows = await despesaModel.create(despesa);
			res.status(201).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async show(req, res){
		try {
			const id = req.params.id;
			const rows = await despesaModel.findById(id);
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async update(req, res){
		try {
			const id = req.params.id;
			const despesa = req.body;
			const rows = await despesaModel.update(despesa,id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async delete(req, res){
		try {
			const id = req.params.id;
			const rows = await despesaModel.delete(id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
module.exports = new despesaController();