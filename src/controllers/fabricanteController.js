const { json } = require("express")
const fabricanteModel = require("../models/fabricanteModel")

class fabricanteController {

    async index(req, res){
        try {
            const rows = await fabricanteModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res,json(error)
        }
    }

    async store(req, res){
        try {
            const fabricante = req.body
            const rows = await fabricanteModel.create(fabricante)
            res.status(201).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await fabricanteModel.findById(id)
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const fabricante = req.body
            const rows = await fabricanteModel.update(fabricante,id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await fabricanteModel.delete(id)
            res.status(202).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = new fabricanteController()