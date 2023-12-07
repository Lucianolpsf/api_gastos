const requests = (rota)=>{
  const request =   JSON.stringify({
        detalhar: {
            method: "GET",
            description:"Para mais detalhes deste user",
            url: process.env.URL_API + '/'+rota+'/codigo_usuario'
        },
        cadastrar: {
            method: "POST",
            description:"Para inserir novos usuarios",
            url: process.env.URL_API + '/'+rota,
            body: {
                nome: 'string',
                nickname: 'string',
                email: 'string',
                password: 'string'
            }
        },
        retornar_usuarios:{
            method: "GET",
            description:"Para retornar todos os usuarios",
            url: process.env.URL_API + '/'+rota
        },
        atualizar: {
            method: "PUT",
            description:"Para para atualisar este user",
            url: process.env.URL_API + '/'+rota+'/codigo_usuario'
        },
        excluir: {
                method: "DELETE",
                description:"Para para excluir este user",
                url: process.env.URL_API + '/'+rota+'/codigo_usuario'
        }
    })

   return  JSON.parse(request)
}

module.exports = requests