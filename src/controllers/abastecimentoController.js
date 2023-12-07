const abastecimentoModel = require("../models/abastecimentoModel")

class abastecimentoController {

    async index(req, res){
        try {
            const rows = await abastecimentoModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const abastecimento = req.body
            const rows = await abastecimentoModel.create(abastecimento)
            res.status(201).json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await abastecimentoModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const abastecimento = req.body
            const rows = await abastecimentoModel.update(abastecimento,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await abastecimentoModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new abastecimentoController()