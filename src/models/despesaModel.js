const connection = require('../database/db');

class despesaModel {
    
	create(despesa){
		const sql = `INSERT INTO tb_despesa 
                        (nome, valor, descricao, categoria, veiculo)
                     VALUES
                        (?,?,?,?,?);`;

		const values = [
			despesa.nome,
			despesa.valor,
			despesa.descricao,
			despesa.categoria,
			despesa.veiculo
		];

		return new Promise((resolve, reject)=>{
			connection.query(sql, values, (erro, result)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(result);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_despesa;';

		return new Promise((resolve, reject)=>{
			connection.query(sql, (erro, result)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(result);
				}
			});
		});
	}

	update(despesa, id){
		const sql = `UPDATE tb_despesa 
                     SET nome = ? , valor = ?, descricao = ?, categoria = ?, veiculo = ? 
                     WHERE id_despesa = ?`;

		const values = [
			despesa.nome,
			despesa.valor,
			despesa.descricao,
			despesa.categoria,
			despesa.veiculo,
			id
		];

		return new Promise((resolve, reject)=>{
			connection.query(sql, values, (erro, result)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(result);
				}
			});
		});
	}
    
	delete(id){
		const sql = 'DELETE FROM tb_despesa WHERE id_despesa = ?';

		return new Promise((resolve, reject)=>{
			connection.query(sql, id, (erro, result)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(result);
				}
			});
		});
	}

	findById(id){
		const sql = 'SELECT * FROM tb_despesa WHERE id_despesa = ?;';

		return new Promise((resolve, reject)=>{
			connection.query(sql, id, (erro, result)=>{
				if(erro){
					return reject(erro);
				}else{
					return resolve(result);
				}
			});
		});
	}
}

module.exports = new despesaModel();