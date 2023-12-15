const connection = require('../database/db');
const requests = require('../helpers/responseRequest');

const veiculo = {
	fabricante: 'number',
	modelo: 'string',
	ano_fabricacao: 'number',
	ano_modelo: 'number',
	placa: 'string',
	cor: 'number'
};

class veiculoModel {

	create(veiculo){
		const sql = 'CALL sp_insert_veiculo(?,?,?,?,?,?,?);';

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
		const sql = 'SELECT * FROM vw_motorista_veiculo WHERE id_veiculo IS NOT NULL ORDER BY id_veiculo;';
        
		return new Promise((resolve, reject)=>{
            
			connection.query(sql , (erro, resultado)=>{
				if(erro){
					return reject(erro);
				}else{

					return resolve({
						status: 200,
						request: requests('veiculo', veiculo),
						veiculos: resultado.map( ({ id_veiculo, fabricante, modelo, ano_fabricacao, ano_modelo, placa, cor})=> {
				
							return { id_veiculo, fabricante, modelo, ano_fabricacao, ano_modelo, placa, cor};
						})
					});

					// const rows = resultado;
					// return resolve(rows);
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
		const sql = 'SELECT * FROM vw_motorista_veiculo WHERE id_veiculo = ?;';

		return new Promise((resolve, reject)=>{
            
			connection.query(sql , id, (erro, resultado)=>{
				if(erro){return reject(erro);}

				if (resultado < 1){return resolve({
					mensagem: 'Veiculo não encontrado',
					status: 404
				}
				);}

				return resolve({
					mensagem: 'Veiculo localizado',
					status: 200,
					veiculo: {
						id_veiculo: resultado[0].id_veiculo,
						fabricante: resultado[0].fabricante,
						modelo: resultado[0].modelo,
						ano_fabricacao: resultado[0].ano_fabricacao,
						ano_modelo: resultado[0].ano_modelo,
						placa: resultado[0].placa,
						cor: resultado[0].cor,
						id_motorista: resultado[0].id_user,
						motorista: resultado[0].nome
					},
					request: requests('veiculo', veiculo)
				});	
				
				// const row = resultado;
				// return resolve(row);
			});
		});
	}
}

module.exports = new veiculoModel();