const categoriaModel = require("../models/categoriaModel")

class categoriaController {

    async index(req, res){
        const rows = await categoriaModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const categoria = req.body
        const rows = await categoriaModel.create(categoria)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await categoriaModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const categoria = req.body
        const rows = await categoriaModel.update(categoria,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await categoriaModel.delete(id)
        res.json(rows)
    }

}
module.exports = new categoriaController()