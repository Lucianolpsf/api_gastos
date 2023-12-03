const connection = require('../database/db')
const express = require('express')
const veiculoRoutes = express.Router()

veiculoRoutes.get('/veiculos',(req, res)=>{
        
    const sql = 'SELECT * FROM tb_veiculo;'

    connection.query(sql , (erro, resultado)=>{
        if(erro){
            res.status(404).json({ 'erro': erro})
        }else{
            res.status(200).json(resultado)
        }
    })
})
    
veiculoRoutes.get('/veiculos/:id',(req, res)=>{
    
    const sql = 'SELECT * FROM tb_veiculo WHERE id_veiculo = ?;'

    connection.query(sql ,[req.params.id], (erro, resultado)=>{
        if(erro){
            res.status(404).json({ 'erro': erro})
        }else{
            res.status(200).json(resultado)
        }
    })
})
    
veiculoRoutes.post('/veiculos',(req, res)=>{
    
    const sql = `INSERT INTO tb_veiculo 
                    (fabricante, modelo, ano_fabricacao, ano_modelo, placa, cor, motorista)
                VALUES
                    (?,?,?,?,?,?,?)`

    const values = [
        fabricante = req.body.fabricante,
        modelo = req.body.modelo,
        ano_fabricacao = req.body.ano_fabricacao,
        ano_modelo = req.body.ano_modelo,
        placa = req.body.placa,
        cor = req.body.cor,
        motorista = req.body.motorista
    ]

    connection.query(sql, values, (erro, resultado)=>{
        if(erro){
            res.status(404).json({ 'erro': erro})
        }else{
            res.status(200).json(resultado)
        }

    })
})
    
veiculoRoutes.put('/veiculos/:id',(req, res)=>{
    
    const sql = `UPDATE tb_veiculo 
                    SET fabricante = ?, modelo = ?, ano_fabricacao = ?, ano_modelo = ?, placa = ?, cor = ?, motorista = ?
                    WHERE
                    id_veiculo = ?;`

    const values = [
        fabricante = req.body.fabricante,
        modelo = req.body.modelo,
        ano_fabricacao = req.body.ano_fabricacao,
        ano_modelo = req.body.ano_modelo,
        placa = req.body.placa,
        cor = req.body.cor,
        motorista = req.body.motorista,
        id_veiculo = req.params.id
    ]

    connection.query(sql, values, (erro, resultado)=>{
        if(erro){
            res.status(404).json({ 'erro': erro})
        }else{
            res.status(200).json(resultado)
            }

    })
})
    
veiculoRoutes.delete('/veiculos/:id',(req, res)=>{

    const sql = 'DELETE FROM tb_veiculo WHERE id_veiculo = ?;'

    connection.query(sql ,[req.params.id], (erro, resultado)=>{
        if(erro){
            res.status(404).json({ 'erro': erro})
        }else{
            res.status(200).json(resultado)
        }
    })
})

module.exports = veiculoRoutes