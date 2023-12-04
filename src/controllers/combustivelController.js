const combustivelModel = require("../models/combustivelModel")

class combustivelController {

    async index(req, res){
        const rows = await combustivelModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const combustivel = req.body
        const rows = await combustivelModel.create(combustivel)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await combustivelModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const combustivel = req.body
        const rows = await combustivelModel.update(combustivel,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await combustivelModel.delete(id)
        res.json(rows)
    }

}
module.exports = new combustivelController()