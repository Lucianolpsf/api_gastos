const connection = require('../database/db');

class categoriaModel{

	create(categoria){
		const sql = 'INSERT INTO tb_categoria (nome) VALUES (?);';
		return new Promise((resolve, reject)=>{
			connection.query(sql, categoria.nome, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_categoria;';

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
    
	update(categoria, id){
		const sql = 'UPDATE tb_categoria SET nome = ? WHERE id_categoria = ?';

		const values = [categoria.nome , id];

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
		const sql = 'DELETE FROM tb_categoria WHERE id_categoria = ?';
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
		const sql = 'SELECT * FROM tb_categoria WHERE id_categoria = ?;';

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

module.exports = new categoriaModel();