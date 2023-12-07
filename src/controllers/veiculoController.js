const veiculoModel = require("../models/veiculoModel")

class veiculoController {

    async index(req, res){
        try {
            const rows = await veiculoModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async store(req, res){
        try {
            const veiculo = req.body
            const rows = await veiculoModel.create(veiculo)
            res.status(201).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async show(req, res){
        try {
            const id = req.params.id
            const rows = await veiculoModel.findById(id)
            res.status(200).json(rows) 
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res){
        try {
            const id = req.params.id
            const veiculo = req.body
            const rows = await veiculoModel.update(veiculo,id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await veiculoModel.delete(id)
            res.status(202).json(rows) 
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new veiculoController()