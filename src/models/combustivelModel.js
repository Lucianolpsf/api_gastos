const connection = require('../database/db')

class combustivelModel{

    create(combustivel){
        const sql = 'INSERT INTO tb_combustivel (nome) VALUES (?);'
        return new Promise((resolve, reject)=>{
            connection.query(sql, combustivel.nome, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(resultado)
                }
            })
        })
    }

    findAll(){
        const sql = 'SELECT * FROM tb_combustivel;'

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
    
    update(combustivel, id){
        const sql = 'UPDATE tb_combustivel SET nome = ? WHERE id_combustivel = ?'

        const values = [combustivel.nome , id]

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
        const sql = 'DELETE FROM tb_combustivel WHERE id_combustivel = ?'
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
        const sql = 'SELECT * FROM tb_combustivel WHERE id_combustivel = ?;'

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

module.exports = new combustivelModel()