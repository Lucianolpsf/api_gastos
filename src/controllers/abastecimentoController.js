const abastecimentoModel = require("../models/abastecimentoModel")

class abastecimentoController {

    async index(req, res){
        try {
            const rows = await abastecimentoModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async store(req, res){
        try {
            const abastecimento = req.body
            const rows = await abastecimentoModel.create(abastecimento)
            res.status(201).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await abastecimentoModel.findById(id)
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const abastecimento = req.body
            const rows = await abastecimentoModel.update(abastecimento,id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await abastecimentoModel.delete(id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = new abastecimentoController()