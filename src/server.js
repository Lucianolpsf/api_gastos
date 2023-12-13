const app = require('./app');

require('dotenv').config();

// eslint-disable-next-line no-undef
app.listen(process.env.SERVER_PORT, ()=>{
	// eslint-disable-next-line no-undef
	console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`);
});