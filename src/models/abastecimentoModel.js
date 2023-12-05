const connection = require('../database/db')

class abastecimentoModel {
    
    create(abastecimento){
        const sql = `INSERT INTO tb_abastecimento 
                        (valor_litro, 
                         qtd_litros,
                         valor_abastecido,
                         cashback,
                         km_veiculo,
                         data_abastecimento,
                         veiculo,
                         posto,
                         combustivel,
                         pagamento)
                     VALUES
                        (?,?,?,?,?,?,?,?,?,?);`

        const values = [
            abastecimento.valor_litro, 
            abastecimento.qtd_litros,
            abastecimento.valor_abastecido,
            abastecimento.cashback,
            abastecimento.km_veiculo, 
            abastecimento.data_abastecimento,
            abastecimento.veiculo,
            abastecimento.posto,
            abastecimento.combustivel,
            abastecimento.pagamento
        ]

        return new Promise((resolve, reject)=>{
            connection.query(sql, values, (erro, result)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }

    findAll(){
        const sql = 'SELECT * FROM tb_abastecimento;'

        return new Promise((resolve, reject)=>{
            connection.query(sql, (erro, result)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }

    update(abastecimento, id){
        const sql = `UPDATE tb_abastecimento 
                     SET 
                        valor_litro = ?, 
                        qtd_litros = ?,
                        valor_abastecido = ?,
                        cashback = ?,
                        km_veiculo = ?,
                        data_abastecimento = ?,
                        veiculo = ?,
                        posto = ?,
                        combustivel = ?,
                        pagamento = ? 
                     WHERE id_abastecimento = ?`

        const values = [
            abastecimento.valor_litro, 
            abastecimento.qtd_litros,
            abastecimento.valor_abastecido,
            abastecimento.cashback,
            abastecimento.km_veiculo, 
            abastecimento.data_abastecimento,
            abastecimento.veiculo,
            abastecimento.posto,
            abastecimento.combustivel,
            abastecimento.pagamento,
            id
        ]

        return new Promise((resolve, reject)=>{
            connection.query(sql, values, (erro, result)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }
    
    delete(id){
        const sql = 'DELETE FROM tb_abastecimento WHERE id_abastecimento = ?'

        return new Promise((resolve, reject)=>{
            connection.query(sql, id, (erro, result)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }

    findById(id){
        const sql = 'SELECT * FROM tb_abastecimento WHERE id_abastecimento = ?;'

        return new Promise((resolve, reject)=>{
            connection.query(sql, id, (erro, result)=>{
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }
}

module.exports = new abastecimentoModel()