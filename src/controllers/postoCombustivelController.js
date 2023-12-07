const postoCombustivelModel = require("../models/postoCombustivelModel")

class postoCombustivelController {

    async index(req, res){
        try {
            const rows = await postoCombustivelModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const postoCombustivel = req.body
            const rows = await postoCombustivelModel.create(postoCombustivel)
            res.status(201).json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await postoCombustivelModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const postoCombustivel = req.body
            const rows = await postoCombustivelModel.update(postoCombustivel,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await postoCombustivelModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new postoCombustivelController()