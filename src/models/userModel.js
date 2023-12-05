const connection = require('../database/db')

class userModel{

    create(user){
        const sql = 'INSERT INTO tb_user (nome, nickname, email, password) VALUES (?, ?, ?, ?);'

        const values = [
            user.nome,
            user.nickname,
            user.email,
            user.password
        ]

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

    findAll(){
        const sql = 'SELECT * FROM tb_user;'

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
    
    update(user, id){
        const sql = 'UPDATE tb_user SET nome =?, nickname =?, email =?, password =? WHERE id_user = ?'

        const values = [
            user.nome,
            user.nickname,
            user.email,
            user.password,
            id
        ]

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
        const sql = 'DELETE FROM tb_user WHERE id_user = ?'
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
        const sql = 'SELECT * FROM tb_user WHERE id_user = ?;'

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

module.exports = new userModel()