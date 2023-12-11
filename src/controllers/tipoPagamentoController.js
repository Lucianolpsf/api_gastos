const tipoPagamentoModel = require('../models/tipoPagamentoModel');

class tipoPagamentoController {

	async index(req, res){
		try {
			const rows = await tipoPagamentoModel.findAll();
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async store(req, res){
		try {
			const tipoPagamento = req.body;
			const rows = await tipoPagamentoModel.create(tipoPagamento);
			res.status(201).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async show(req, res){
		try {
			const id = req.params.id;
			const rows = await tipoPagamentoModel.findById(id);
			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
    
	async update(req, res){
		try {
			const id = req.params.id;
			const tipoPagamento = req.body;
			const rows = await tipoPagamentoModel.update(tipoPagamento,id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}

	}
    
	async delete(req, res){
		try {
			const id = req.params.id;
			const rows = await tipoPagamentoModel.delete(id);
			res.status(202).json(rows);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new tipoPagamentoController();