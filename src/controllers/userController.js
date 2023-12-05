const userModel = require("../models/userModel")

class userController {

    async index(req, res){
        const rows = await userModel.findAll()
        res.json(rows)
    }

    async store(req, res){
        const user = req.body
        const rows = await userModel.create(user)
        res.json(rows)
    }
    
    async show(req, res){
        const id = req.params.id
        const rows = await userModel.findById(id)
        res.json(rows)
    }
    
    async update(req, res){
        const id = req.params.id
        const user = req.body
        const rows = await userModel.update(user,id)
        res.json(rows)

    }
    
    async delete(req, res){
        const id = req.params.id
        const rows = await userModel.delete(id)
        res.json(rows)
    }

}
module.exports = new userController()