const connection = require('../database/db')

class fabricanteModel{

    create(fabricante){
        const sql = 'INSERT INTO tb_fabricante (nome) VALUES (?);'
        return new Promise((resolve, reject)=>{
            connection.query(sql, fabricante.nome, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }

    findAll(){
        const sql = 'SELECT * FROM tb_fabricante;'

        return new Promise((resolve, reject)=>{

            connection.query(sql, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }
    
    update(fabricante, id){
        const sql = 'UPDATE tb_fabricante SET nome = ? WHERE id_fabricante = ?'

        const values = [fabricante.nome , id]

        return new Promise((resolve, reject)=>{
            connection.query(sql, values, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }
    
    delete(id){
        const sql = 'DELETE FROM tb_fabricante WHERE id_fabricante = ?'
        return new Promise((resolve, reject)=>{
            connection.query(sql, id, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }
    
    findById(id){
        const sql = 'SELECT * FROM tb_fabricante WHERE id_fabricante = ?;'

        return new Promise((resolve, reject)=>{

            connection.query(sql, id, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }

}

module.exports = new fabricanteModel()