const categoriaRoutes = require('./categoriaRoutes')
const combustivelRoutes = require('./combustivelRoutes')
const corRoutes = require('./corRoutes')
const fabricanteRoutes = require('./fabricanteRoutes')
const postocombustivelRoutes = require('./postoCombustivelRoutes')
const tipoPagamentoRoutes = require('./tipoPagamentoRoutes') 
const veiculoRoutes = require('./veiculoRoutes')


const appRoutes = [
    categoriaRoutes,
    combustivelRoutes,
    corRoutes,
    fabricanteRoutes,
    postocombustivelRoutes,
    tipoPagamentoRoutes,
    veiculoRoutes
]

module.exports = appRoutes