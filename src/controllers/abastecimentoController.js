const abastecimentoModel = require("../models/abastecimentoModel")

class abastecimentoController {

    async index(req, res){
        const rows = await abastecimentoModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const abastecimento = req.body
        const rows = await abastecimentoModel.create(abastecimento)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await abastecimentoModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const abastecimento = req.body
        const rows = await abastecimentoModel.update(abastecimento,id)
        res.json(rows)
    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await abastecimentoModel.delete(id)
        res.json(rows)
    }
}
module.exports = new abastecimentoController()