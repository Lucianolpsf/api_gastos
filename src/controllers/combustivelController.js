const combustivelModel = require("../models/combustivelModel")

class combustivelController {

    async index(req, res){
        try {
            const rows = await combustivelModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async store(req, res){
        try {
            const combustivel = req.body
            const rows = await combustivelModel.create(combustivel)
            res.status(201).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await combustivelModel.findById(id)
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const combustivel = req.body
            const rows = await combustivelModel.update(combustivel,id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await combustivelModel.delete(id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = new combustivelController()