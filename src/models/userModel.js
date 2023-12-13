/* eslint-disable no-unused-vars */
const connection = require('../database/db');
const requests = require('../helpers/responseRequest');

const user_body =  {               
	nome: 'string',
	nickname: 'string',
	email: 'string',
	password: 'string' 
};

class userModel{

	create({nome, nickname, email, password}){
		const sql = 'INSERT INTO tb_user (nome, nickname, email, password) VALUES (?, ?, ?, ?);';

		const values = [
			nome,
			nickname,
			email,
			password
		];
        
		const resolve =  new Promise((resolve, reject)=>{
            
			connection.query('SELECT email FROM tb_user WHERE email = ? ', email, (erro , resultado)=>{
				if(erro){return reject(erro);}

				if(resultado.length >= 1){return reject({ mensagem: 'Usuario ja cadastrado.'});}
                
				connection.query(sql, values, (erro, resultado)=>{
                    
					if(erro){return reject(erro);}
                        
					return resolve( {
						message: 'User inserido com sucesso',
						status: 201,
						user: {
							id_user: resultado.insertId,
							nome,
							nickname,
							email
						},
						request: requests('user', user_body)
					});
				});
			});
		});
		return resolve;
	}

	findAll(){
		const sql = 'SELECT DISTINCT id_user , nome, nickname , email FROM vw_motorista_veiculo;';

		const resolve = new Promise((resolve, reject)=>{

			connection.query(sql, (erro, resultado)=>{
				if(erro){return reject({erro: erro});}
                
				return resolve( {
					request: requests('user', user_body),
					status: 200,
					users: resultado.map( ({id_user, nome, nickname , email})=> {
						return{
							id_user,
							nome,
							nickname,
							email
						};
					})
				});
			});
		});
		return resolve;
	}
    
	update({nome, nickname, email, password}, id){
		const sql = 'UPDATE tb_user SET nome =?, nickname =?, email =?, password =? WHERE id_user = ?';

		const values = [
			nome,
			nickname,
			email,
			password,
			id
		];

		const resolve = new Promise((resolve, reject)=>{

			connection.query('SELECT id_user FROM vw_motorista_veiculo WHERE id_user = ? ', id, (erro , resultado)=>{
				if(erro){return reject(erro);}

				if(resultado < 1){return resolve({
					mensagem: 'Usuario não encontrado',
					status: 404
				}
				);}

				connection.query(sql, values, (erro, resultado)=>{
					if(erro){return reject(erro);}
    
					return resolve( {
						message: 'User atualizado com sucesso',
						status: 202,
						users: {
							id_user: id,
							nome,
							nickname,
							email
						},
						request: requests('user', user_body)
					});
				});
			});
		});
		return resolve;
	}
    
	delete(id){
		const sql = 'DELETE FROM tb_user WHERE id_user = ?';
		const resolve = new Promise((resolve, reject)=>{

			connection.query('SELECT id_user FROM tb_user WHERE id_user = ? ', id, (erro , resultado)=>{
				if(erro){return reject(erro);}

				if(resultado < 1){return resolve({
					mensagem: 'Usuario não encontrado',
					status: 404
				}
				);}

				connection.query(sql, id, (erro, resultado)=>{
					if(erro){return reject(erro);}
    
					return resolve( {
						message: 'User deletado com sucesso',
						status: 202,
						request: requests('user', user_body)
					});
				});
			});
		});
		return resolve;
	}
    
	findById(id){
		const sql = 'SELECT * FROM vw_motorista_veiculo WHERE id_user = ?;';

		const resolve = new Promise((resolve, reject)=>{

			connection.query(sql, id, (erro, resultado)=>{
				if(erro){return reject(erro);}
                
				if (resultado < 1){return resolve({
					mensagem: 'Usuario não encontrado',
					status: 404
				}
				);}

				return resolve( {
					mensagem: 'Usuario localizado',
					status: 200,
					users: {
						id_user: resultado[0].id_user,
						nome: resultado[0].nome,
						nickname: resultado[0].nickname,
						email: resultado[0].email
					},
					request: requests('user', user_body)
				});
			});
		});
		return resolve;
	}
}

module.exports = new userModel();