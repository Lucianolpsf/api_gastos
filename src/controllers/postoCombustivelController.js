const postoCombustivelModel = require("../models/postoCombustivelModel")

class postoCombustivelController {

    async index(req, res){
        const rows = await postoCombustivelModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const postoCombustivel = req.body
        const rows = await postoCombustivelModel.create(postoCombustivel)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await postoCombustivelModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const postoCombustivel = req.body
        const rows = await postoCombustivelModel.update(postoCombustivel,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await postoCombustivelModel.delete(id)
        res.json(rows)
    }
}
module.exports = new postoCombustivelController()