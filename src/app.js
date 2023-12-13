const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api',routes);

app.use((_req,_res,next)=>{
	const erro = new Error('Rota não encontrado');
	erro.status = 404;
	next(erro);
});

// eslint-disable-next-line no-unused-vars
app.use((error, _req, res, _next)=>{
	res.status(error.status || 500);
	return res.send({
		erro: {
			mensagem: error.message
		}
	});
});

module.exports = app;