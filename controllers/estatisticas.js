const Estatisticas = require('../models/estatisticas')

module.exports = app => {
    app.get('/estatisticas', (req, res) => {
        Estatisticas.lista(res)
    })

    app.get('/estatisticas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Estatisticas.buscaPorId(id, res)
    })

    app.get('/estatisticas/1/:dataOcorrencia', (req, res) => {
        const dataOcorrencia = parseInt(req.params.dataOcorrencia)

        Estatisticas.buscaOcorrencia1PorData(dataOcorrencia, res)
    }) 

    app.get('/estatisticas/2/:dataOcorrencia', (req, res) => {
        const dataOcorrencia = parseInt(req.params.dataOcorrencia)

        Estatisticas.buscaOcorrencia2PorData(dataOcorrencia, res)
    }) 
/*
    app.get('/estatisticas/:codOcorrencia/:dataOcorrencia', (req, res) => {
        const codOcorrencia = parseInt(req.params.codOcorrencia)
        const dataOcorrencia = parseInt(req.params.dataOcorrencia)

        Estatisticas.buscaPorOcorrencia(codOcorrencia, res)
        Estatisticas.buscaPorData(dataOcorrencia, res)
    })
*/
    app.post('/estatisticas', (req, res) => {
        const estatistica = req.body

        Estatisticas.adiciona(estatistica, res)
    })

    app.patch('/estatisticas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Estatisticas.altera(id, valores, res)
    })

    app.delete('/estatisticas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Estatisticas.deleta(id, res)
    })
}