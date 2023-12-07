const express = require('express')
const appRoutes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(appRoutes)

app.use((req,res,next)=>{
    const erro = new Error('Endpoint Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app