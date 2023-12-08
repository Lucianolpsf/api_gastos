const userModel = require("../models/userModel")

class userController {

    async index(req, res){
        try {
            const rows = await userModel.findAll()
            res.status(200).json(rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async store(req, res){
        try {
            const user = req.body
            const rows = await userModel.create(user)
            res.status(201).json(rows)

        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async show(req, res){
        try {
            const id = req.params.id
            const rows = await userModel.findById(id)
            if(rows.status == 404){
                res.status(404).json(rows)
            }else{
                res.status(200).json(rows)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async update(req, res){
        try {
            const id = req.params.id
            const user = req.body
            const rows = await userModel.update(user,id)
            if(rows.status == 404){
                res.status(404).json(rows)
            }else{
                res.status(202).json(rows)
            }

        } catch (error) {

            res.status(500).json(error)
        }
    }
    
    async delete(req, res){
        try {
            const id = req.params.id
            const rows = await userModel.delete(id)
            if(rows.status == 404){
                res.status(404).json(rows)
            }else{
                res.status(202).json(rows)
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new userController()