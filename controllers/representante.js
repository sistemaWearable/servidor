const Representante = require('../models/representante')

module.exports = app => {
    app.get('/representante', (req, res) => {
        Representante.lista(res)
    })

    
    app.get('/representante/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Representante.buscaPorId(id, res)
    })

    app.post('/representante', (req, res) => {
        const representante = req.body

        Representante.adiciona(representante, res)
    })

    app.patch('/representante/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Representante.altera(id, valores, res)
    })

    app.delete('/representante/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Representante.deleta(id, res)
    })
}