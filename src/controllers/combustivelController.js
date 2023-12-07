const combustivelModel = require("../models/combustivelModel")

class combustivelController {

    async index(req, res){
        try {
            const rows = await combustivelModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const combustivel = req.body
            const rows = await combustivelModel.create(combustivel)
            res.status(201).json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await combustivelModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const combustivel = req.body
            const rows = await combustivelModel.update(combustivel,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await combustivelModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new combustivelController()