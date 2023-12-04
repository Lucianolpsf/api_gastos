const veiculoModel = require("../models/veiculoModel")

class veiculoController {

    async index(req, res){
        const rows = await veiculoModel.findAll()
        res.json(rows)       
    }

    async store(req, res){
        const veiculo = req.body
        const rows = await veiculoModel.create(veiculo)
        res.json(rows)
    }

    async show(req, res){
        const id = req.params.id
        const rows = await veiculoModel.findById(id)
        res.json(rows)  
    }

    async update(req, res){
        const id = req.params.id
        const veiculo = req.body
        const rows = await veiculoModel.update(veiculo,id)
        res.json(rows)
    }

    async delete(req, res){
        const id = req.params.id
        const rows = await veiculoModel.delete(id)
        res.json(rows) 
    }
}

module.exports = new veiculoController()