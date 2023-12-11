const connection = require('../database/db');

class pagamentoModel{

	create(pagamento){
		const sql = 'INSERT INTO tb_tipo_pagamento (descricao) VALUES (?);';
		return new Promise((resolve, reject)=>{
			connection.query(sql, pagamento.descricao, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(resultado);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_tipo_pagamento;';

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
    
	update(pagamento, id){
		const sql = 'UPDATE tb_tipo_pagamento SET descricao = ? WHERE id_pagamento = ?';

		const values = [pagamento.descricao , id];

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
		const sql = 'DELETE FROM tb_tipo_pagamento WHERE id_pagamento = ?';
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
		const sql = 'SELECT * FROM tb_tipo_pagamento WHERE id_pagamento = ?;';

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

module.exports = new pagamentoModel();