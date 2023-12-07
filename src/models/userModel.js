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

        
        const resolve =  new Promise((resolve, reject)=>{
            
            connection.query('SELECT email FROM tb_user WHERE email = ? ', user.email, (erro , resultado)=>{
                if(erro){return reject(erro)}

                if(resultado.length >= 1){
                    return resolve({
                        mensagem: 'Usuario ja cadastrado.'
                    })
                }else{
                    connection.query(sql, values, (erro, resultado)=>{
                        if(erro){
                            return reject(erro)
                        }else{
                            return resolve( {
                                message: "User inserido com sucesso",
                                request: {
                                    method: "GET",
                                    description:"Para retornar todos os usuarios",
                                    url: process.env.URL_API + '/user'
                                },  
                                users: {
                                    id_user: resultado.insertId,
                                    nome: user.nome,
                                    nickname: user.nickname,
                                    email: user.email,
                                    request: {
                                        method: "PUT",
                                        description:"Para para atualisar este user",
                                        url: process.env.URL_API + '/user/'+ resultado.insertId
                                    }
                                }
                            })
                        }
                    })
                }
            })
        })

        return resolve
    }

    findAll(){
        const sql = 'SELECT * FROM tb_user;'

        const resolve = new Promise((resolve, reject)=>{

            connection.query(sql, (erro, resultado)=>{
                if(erro){
                    return reject({erro: erro})
                }else{
                    return resolve( {
                        request: {
                            method: "POST",
                            description:"Para inserir novos usuarios",
                            url: process.env.URL_API + '/user',
                            body: {
                                nome: 'string',
                                nickname: 'string',
                                email: 'string',
                                password: 'string'
                            }
                        },
                        users: resultado.map( user => {
                            return{
                                id_user: user.id_user,
                                nome: user.nome,
                                nickname: user.nickname,
                                email: user.email,
                                request: {
                                    method: "GET",
                                    description:"Para mais detalhes deste user",
                                    url: process.env.URL_API + '/user/'+ user.id_user
                                }
                            }
                        })
                    })
                }
            })
        })

        return resolve
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

        const resolve = new Promise((resolve, reject)=>{
            connection.query(sql, values, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve( {
                        message: "User atualizado com sucesso",
                        request: {
                            method: "GET",
                            description:"Para retornar todos os usuarios",
                            url: process.env.URL_API + '/user'
                        },  
                        users: {
                            id_user: id,
                            nome: user.nome,
                            nickname: user.nickname,
                            email: user.email,
                            request: {
                                method: "DELETE",
                                description:"Para para excluir este user",
                                url: process.env.URL_API + '/user/'+ id
                            }
                        }
                    })
                }
            })
        })
        return resolve;
    }
    
    delete(id){
        const sql = 'DELETE FROM tb_user WHERE id_user = ?'
        const resolve = new Promise((resolve, reject)=>{
            connection.query(sql, id, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve( {
                        message: "User deletado com sucesso",
                        request: {
                            method: "POST",
                            description:"Para inserir novos usuarios",
                            url: process.env.URL_API + '/user',
                            body: {
                                nome: 'string',
                                nickname: 'string',
                                email: 'string',
                                password: 'string'
                            }
                        }
                    })
                }
            })
        })
        return resolve;
    }
    
    findById(id){
        const sql = 'SELECT * FROM tb_user WHERE id_user = ?;'

        const console = new Promise((resolve, reject)=>{

            connection.query(sql, id, (erro, resultado)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve( {
                        request: {
                            method: "POST",
                            description:"Para inserir novos usuarios",
                            url: process.env.URL_API + '/user'
                        },
                        users: {
                            id_user: resultado[0].id_user,
                            nome: resultado[0].nome,
                            nickname: resultado[0].nickname,
                            email: resultado[0].email,
                            request: {
                                method: "GET",
                                description:"Para mais detalhes deste user",
                                url: process.env.URL_API + '/user/'+ resultado[0].id_user
                            }
                        }
                    })
                }
            })
        })
        return console
    }
}

module.exports = new userModel()