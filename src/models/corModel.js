const connection = require('../database/db');

class corModel{

	create(cor){
		const sql = 'INSERT INTO tb_cor (nome) VALUES (?);';
		return new Promise((resolve, reject)=>{
			connection.query(sql, cor.nome, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_cor;';

		return new Promise((resolve, reject)=>{

			connection.query(sql, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}
    
	update(cor, id){
		const sql = 'UPDATE tb_cor SET nome = ? WHERE id_cor = ?';

		const values = [cor.nome , id];

		return new Promise((resolve, reject)=>{
			connection.query(sql, values, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}
    
	delete(id){
		const sql = 'DELETE FROM tb_cor WHERE id_cor = ?';
		return new Promise((resolve, reject)=>{
			connection.query(sql, id, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}
    
	findById(id){
		const sql = 'SELECT * FROM tb_cor WHERE id_cor = ?;';

		return new Promise((resolve, reject)=>{

			connection.query(sql, id, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}

}

module.exports = new corModel();