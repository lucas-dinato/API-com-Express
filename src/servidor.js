// http://localhost:3003/produtos
// Postman
// Terminal: npm start
// rs: reinicia servidor

const porta = 3003

const express = require('express')
const app = express()
const bodyParser  = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Body -> x-www-form-urlencoded
app.post('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    }) 
    req.send(produto)  // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta de numero ${porta}.`)
})