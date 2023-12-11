const connection = require('../database/db');

class postoCombustivelModel{

	create(postoCombustivel){
		const sql = 'INSERT INTO tb_posto_combustivel (nome) VALUES (?);';
		return new Promise((resolve, reject)=>{
			connection.query(sql, postoCombustivel.nome, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_posto_combustivel;';

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
    
	update(postoCombustivel, id){
		const sql = 'UPDATE tb_posto_combustivel SET nome = ? WHERE id_posto = ?';

		const values = [postoCombustivel.nome , id];

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
		const sql = 'DELETE FROM tb_posto_combustivel WHERE id_posto = ?';
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
		const sql = 'SELECT * FROM tb_posto_combustivel WHERE id_posto = ?;';

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

module.exports = new postoCombustivelModel();