const despesaModel = require("../models/despesaModel")

class despesaController {

    async index(req, res){
        const rows = await despesaModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const despesa = req.body
        const rows = await despesaModel.create(despesa)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await despesaModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const despesa = req.body
        const rows = await despesaModel.update(despesa,id)
        res.json(rows)
    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await despesaModel.delete(id)
        res.json(rows)
    }
}
module.exports = new despesaController()