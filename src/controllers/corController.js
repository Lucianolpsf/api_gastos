const corModel = require("../models/corModel")

class corController {

    async index(req, res){
        const rows = await corModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const cor = req.body
        const rows = await corModel.create(cor)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await corModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const cor = req.body
        const rows = await corModel.update(cor,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await corModel.delete(id)
        res.json(rows)
    }
}
module.exports = new corController()