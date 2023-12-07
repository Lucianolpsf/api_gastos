const tipoPagamentoModel = require("../models/tipoPagamentoModel")

class tipoPagamentoController {

    async index(req, res){
        try {
            const rows = await tipoPagamentoModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const tipoPagamento = req.body
            const rows = await tipoPagamentoModel.create(tipoPagamento)
            res.status(201).json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await tipoPagamentoModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const tipoPagamento = req.body
            const rows = await tipoPagamentoModel.update(tipoPagamento,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }

    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await tipoPagamentoModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new tipoPagamentoController()