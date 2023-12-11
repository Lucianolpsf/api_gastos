const connection = require('../database/db');

class veiculoModel {

	create(veiculo){
		const sql = `INSERT INTO tb_veiculo 
                        (fabricante, modelo, ano_fabricacao, ano_modelo, placa, cor, motorista)
                    VALUES
                        (?,?,?,?,?,?,?)`;

		const values = [
			veiculo.fabricante,
			veiculo.modelo,
			veiculo.ano_fabricacao,
			veiculo.ano_modelo,
			veiculo.placa,
			veiculo.cor,
			veiculo.motorista
		];

		return new Promise((resolve, reject)=>{
            
			connection.query(sql , values, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					const rows = resultado;
					return resolve(rows);
				}
			});
		});
	}

	findAll(){
		const sql = 'SELECT * FROM tb_veiculo;';
        
		return new Promise((resolve, reject)=>{
            
			connection.query(sql , (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					const rows = resultado;
					return resolve(rows);
				}
			});
		});
	}

	update(veiculo, id){
		const sql = `UPDATE tb_veiculo 
        SET fabricante = ?, modelo = ?, ano_fabricacao = ?, ano_modelo = ?, placa = ?, cor = ?, motorista = ?
        WHERE
        id_veiculo = ?;`;

		const values = [
			veiculo.fabricante,
			veiculo.modelo,
			veiculo.ano_fabricacao,
			veiculo.ano_modelo,
			veiculo.placa,
			veiculo.cor,
			veiculo.motorista,
			id
		];

		return new Promise((resolve, reject)=>{
            
			connection.query(sql , values, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					const rows = resultado;
					return resolve(rows);
				}
			});
		});
	}

	delete(id){
		const sql = 'DELETE FROM tb_veiculo WHERE id_veiculo = ?;';
    
		return new Promise((resolve, reject)=>{
            
			connection.query(sql , id, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					const row = resultado;
					return resolve(row);
				}
			});
		});
	}
    
	findById(id){
		const sql = 'SELECT * FROM tb_veiculo WHERE id_veiculo = ?;';

		return new Promise((resolve, reject)=>{
            
			connection.query(sql , id, (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{
					const row = resultado;
					return resolve(row);
				}
			});
		});
	}
}

module.exports = new veiculoModel();