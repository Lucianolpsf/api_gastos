const abastecimentoRotes = require('./abastecimentoRoutes');
const categoriaRoutes = require('./categoriaRoutes');
const combustivelRoutes = require('./combustivelRoutes');
const corRoutes = require('./corRoutes');
const despesaRoutes = require('./despesaRoutes');
const fabricanteRoutes = require('./fabricanteRoutes');
const postocombustivelRoutes = require('./postoCombustivelRoutes');
const tipoPagamentoRoutes = require('./tipoPagamentoRoutes'); 
const userRoutes = require('./userRoutes');
const veiculoRoutes = require('./veiculoRoutes');


const routes = [
	abastecimentoRotes,
	categoriaRoutes,
	combustivelRoutes,
	corRoutes,
	despesaRoutes,
	fabricanteRoutes,
	postocombustivelRoutes,
	tipoPagamentoRoutes,
	userRoutes,
	veiculoRoutes
];

module.exports = routes;