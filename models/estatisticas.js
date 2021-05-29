const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Estatisticas {
    adiciona(estatisticas, res){
        const DATA_OCORRENCIA = moment().format('YYYY-MM-DD HH:mm:ss')
        const estatisticasDatado = {...estatisticas, DATA_OCORRENCIA}

        const sql = 'INSERT INTO tb_estatisticas SET ?'
    
    
        conexao.query(sql, estatisticasDatado, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(estatisticas)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM tb_estatisticas'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro, resultados)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM tb_estatisticas WHERE id_est=${id}`

        conexao.query(sql, (erro, resultados) => {
            const estatisticas = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(estatisticas)
            }
        })
    }

    buscaOcorrencia1PorData(dataOcorrencia, res){
        const data_convertida = moment(dataOcorrencia, 'DD-MM-YYYY').format('YYYY-MM-DD')
        const sql = 'SELECT * FROM tb_estatisticas WHERE cod_ocorrencia = 1 AND data_ocorrencia= ?'

        conexao.query(sql, data_convertida, (erro, resultados) => {
            const estatisticas = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(estatisticas)
            }
        })
    }

    buscaOcorrencia2PorData(dataOcorrencia, res){
        const data_convertida = moment(dataOcorrencia, 'DD-MM-YYYY').format('YYYY-MM-DD')
        const sql = 'SELECT * FROM tb_estatisticas WHERE cod_ocorrencia = 2 AND data_ocorrencia= ?'

        conexao.query(sql, data_convertida, (erro, resultados) => {
            const estatisticas = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(estatisticas)
            }
        })
    }


/*    buscaPorData(dataOcorrencia, res){
        const sql = `SELECT * FROM tb_estatisticas WHERE data_ocorrencia=${dataOcorrencia}`

        conexao.query(sql, (erro, resultados) => {
            const estatisticas = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(estatisticas)
            }

        })
    }

    buscaPorOcorrencia(codOcorrencia, res){
        const sql = `SELECT * FROM tb_estatisticas WHERE cod_ocorrencia=${codOcorrencia}`

        conexao.query(sql, (erro, resultados) => {
            const estatisticas = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(estatisticas)
            }

        })
    }*/

    altera(id, valores, res){
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE tb_estatisticas SET ? WHERE id_est=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM tb_estatisticas WHERE id_est=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Estatisticas