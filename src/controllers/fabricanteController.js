const { json } = require("express")
const fabricanteModel = require("../models/fabricanteModel")

class fabricanteController {

    async index(req, res){
        try {
            const rows = await fabricanteModel.findAll()
            res.json(rows)
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
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await fabricanteModel.findById(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const fabricante = req.body
            const rows = await fabricanteModel.update(fabricante,id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await fabricanteModel.delete(id)
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new fabricanteController()