const fabricanteModel = require("../models/fabricanteModel")

class fabricanteController {

    async index(req, res){
        const rows = await fabricanteModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const fabricante = req.body
        const rows = await fabricanteModel.create(fabricante)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await fabricanteModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const fabricante = req.body
        const rows = await fabricanteModel.update(fabricante,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await fabricanteModel.delete(id)
        res.json(rows)
    }

}
module.exports = new fabricanteController()