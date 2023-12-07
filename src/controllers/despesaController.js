const despesaModel = require("../models/despesaModel")

class despesaController {

    async index(req, res){
        try {
            const rows = await despesaModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const despesa = req.body
            const rows = await despesaModel.create(despesa)
            res.status(201).json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await despesaModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const despesa = req.body
            const rows = await despesaModel.update(despesa,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await despesaModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new despesaController()