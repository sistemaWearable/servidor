const Agenda = require('../models/agenda')

module.exports = app => {
    app.get('/agenda', (req, res) => {
        Agenda.lista(res)
    })

    app.get('/agenda/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Agenda.buscaPorId(id, res)
    })

    app.post('/agenda', (req, res) => {
        const agenda = req.body

        Agenda.adiciona(agenda, res)
    })

    app.patch('/agenda/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Agenda.altera(id, valores, res)
    })

    app.delete('/agenda/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Agenda.deleta(id, res)
    })
}