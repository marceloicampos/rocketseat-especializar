const express = require('express')
// acima estamos instanciando o express
// e armazenando na constante express

const app = express()
// acima estamos executando o express
// e armazenando na constante app

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
// escutando na porta 3000
// para iniciar  o servidor, é só digitar node index.js ou node .

// middleware JSON
app.use(express.json())
// abra o insomnia para executar os métodos http

app.route('/').get((req, res) => {
    res.send('Hello World')
})
// rota para localhost:3000/ ou rota raiz
// .get é método buscar / pegar
// req de requisição e res de resposta
// res.send == enviar uma resposta
// para o server e inicie novamente

app.route('/sobre').get((req, res) => {
    res.send('Sobre Mim')
})

// Body Params
app.route('/body').post((req, res) => {
    const { nome, cidade, livros } = req.body
    // res.send(req.body)
    res.send(`Olá ${nome} de ${cidade}. Seu livro favorito é ${livros[0]}.`)
    console.log(req.body)
})

// Route Params
app.route('/params').get((req, res) => res.send('Rota Params'))
app.route('/params/:var').get((req, res) => res.send(req.params.var))
app.route('/params/id/:nome').get((req, res) => res.send(req.params.nome))

// Query Params
// app.route('/query').get((req, res) => res.send('Rota Query'))
app.route('/query').get((req, res) => res.send(req.query.nome))
app.route('/query/about/user').get((req, res) => res.send(req.query))

// método post == enviar informação
app.route('/').post((req, res) => {
    res.send(req.body.content)
    console.log(req.body.content)
})

// método put == editar informação
let author = 'marcelo'

app.route('/autor').get((req, res) => res.send(author))

app.route('/autor').put((req, res) => {
    author = req.body.author
    res.send(author)
    console.log(req.body)
})

// método delete == deletar informação
app.route('/autor/:id').delete((req, res) => {
    id = req.params.id
    res.send(id)
    console.log(req.params.id)
})
