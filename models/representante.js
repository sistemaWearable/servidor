const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Representante {

    adiciona(representante, res) {
        const sql = "INSERT INTO tb_representante SET ?"
    
        conexao.query(sql, representante, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(representante)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM tb_representante'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro, resultados)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM tb_representante WHERE id_rep=${id}`

        conexao.query(sql, (erro, resultados) => {
            const representante = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(representante)
            }
        })
    }

    altera(id, valores, res){
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE tb_representante SET ? WHERE id_rep=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM tb_representante WHERE id_rep =?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Representante