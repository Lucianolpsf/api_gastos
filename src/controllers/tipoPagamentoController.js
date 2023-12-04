const tipoPagamentoModel = require("../models/tipoPagamentoModel")

class tipoPagamentoController {

    async index(req, res){
        const rows = await tipoPagamentoModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const tipoPagamento = req.body
        const rows = await tipoPagamentoModel.create(tipoPagamento)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await tipoPagamentoModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const tipoPagamento = req.body
        const rows = await tipoPagamentoModel.update(tipoPagamento,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await tipoPagamentoModel.delete(id)
        res.json(rows)
    }

}
module.exports = new tipoPagamentoController()