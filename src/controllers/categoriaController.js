const categoriaModel = require("../models/categoriaModel")

class categoriaController {

    async index(req, res){
        try {
            const rows = await categoriaModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async store(req, res){
        try {
            const categoria = req.body
            const rows = await categoriaModel.create(categoria)
            res.status(201).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await categoriaModel.findById(id)
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const categoria = req.body
            const rows = await categoriaModel.update(categoria,id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await categoriaModel.delete(id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = new categoriaController()