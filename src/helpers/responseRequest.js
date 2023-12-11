const requests = (rota, body)=>{
	const request =   JSON.stringify({
		detalhar: {
			description:'Para mais detalhes deste(a) '+rota,
			method: 'GET',
			url: process.env.URL_API + '/'+rota+'/id_'+rota
		},
		cadastrar: {
			description:'Para inserir novos(as) '+ rota,
			method: 'POST',
			url: process.env.URL_API + '/'+rota,
			body: body
		},
		retornar_usuarios:{
			description:'Para retornar todos',
			method: 'GET',
			url: process.env.URL_API + '/'+rota
		},
		atualizar: {
			description:'Para atualizar',
			method: 'PUT',
			url: process.env.URL_API + '/'+rota+'/id_'+rota
		},
		excluir: {
			description:'Para para excluir',
			method: 'DELETE',
			url: process.env.URL_API + '/'+rota+'/id_'+rota
		}
	});

	return  JSON.parse(request);
};

module.exports = requests;