const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Agenda {
  /*  adiciona(agenda, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM')
        const data = moment(agenda.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const dataEhvalida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = agenda.cliente.length >= 4

        const validacoes = [
            {
                nome: 'data', 
                valido: dataEhvalida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos 4 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
            const agendaDatado = {...agenda, dataCriacao, data}

            const sql = 'INSERT INTO tb_agenda SET ?'
    
    
            conexao.query(sql, agendaDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(agenda)
                }
            })
        }


    }*/

    adiciona(agenda, res) {
        const sql = "INSERT INTO tb_agenda SET ?"
    
        conexao.query(sql, agenda, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(agenda)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM tb_agenda'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro, resultados)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM tb_agenda WHERE id_agenda=${id}`

        conexao.query(sql, (erro, resultados) => {
            const agenda = resultados[0]

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(agenda)
            }
        })
    }

    altera(id, valores, res){
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE tb_agenda SET ? WHERE id_agenda=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM tb_agenda WHERE id_agenda=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
    
}

module.exports = new Agenda