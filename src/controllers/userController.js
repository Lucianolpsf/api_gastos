const userModel = require("../models/userModel")

class userController {

    async index(req, res){
        try {
            const rows = await userModel.findAll()
            res.json(rows)
        } catch (error) {
            res.json(error)
        }
    }

    async store(req, res){
        try {
            const user = req.body
            const rows = await userModel.create(user)
            res.status(201).json(rows)

        } catch (error) {
            res.json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await userModel.findById(id)
            res.json(rows)

        } catch (error) {
            res.json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const user = req.body
            const rows = await userModel.update(user,id)
            res.json(rows)

        } catch (error) {

            res.json(error)
        }

    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await userModel.delete(id)
            res.json(rows)

        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new userController()