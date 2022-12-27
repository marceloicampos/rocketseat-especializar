const express = require('express')
const app = express()
const userModel = require('./models/user')
// chamado o module express
// criando variável app que recebe o express()
// criando variável userModel que recebe o module user

app.use(express.json())
// usando o parse do express para o json

require('./controllers/authController')(app)
// estamos requerendo o authController e
// estamos referenciando o controle de autenticação com o (app) e estamos repassando para o controller ao nosso app (principal e único)

app.listen(3000, () => console.log('Express Rodando na porta 3000'))
app.get('/', (req, res) => res.send('Server Rodando na Porta 3000, com Mongo DB Atlas. Usuários Cadastrados: localhost:3000/users'))
app.get('/users', async (request, response) => {
    const users = await userModel.find({})
    try {
        response.send(users)
    } catch (error) {
        response.status(500).send({ error: 'Find User on Server failed' })
    }
})
// listen 3000 é um escutador de rotas em localhost:3000 que exibe um console no servidor
// a rota get '/' é a rota principal que envia uma resposta simples para o navegador cliente
// a rota get '/users' é a rota de listagem de usuários cadastrados no mongoDB Atlas
// users recebe o module userModel com método find com indicação de encontrar todos os usuários cadastrados no mongoDB Atlas pela {} vazia
// try envia uma resposta ao navegador cliente com o método send o conteúdo de users
// catch envia uma resposta ao navegador cliente com o método status com o código 500 e com o conteúdo de error
