const express = require('express')
const app = express()
const userModel = require('./app/models/user')
// chamado o module express
// criando variável app que recebe o express()
// criando variável userModel que recebe o module user

app.use(express.json())
// usando o parse do express para o json

require('./app/controllers/index')(app)
// importamos apenas o controller index e este importa todos os controllers
// require('./app/controllers/authController')(app)
// require('./app/controllers/projectController')(app)
// estamos requerendo o authController e
// estamos referenciando o controle de autenticação com o (app) e estamos repassando para os controllers ao nosso app

app.get('/', (req, res) =>
    res.send(
        '<head><style>body{background-color:black}p{color: #9400D3; font-size: 1.5em;padding:32px}</style></head><p>Node Express Server on-line on port 3000, with Mongo DB Atlas.</p><p>Users on DB: <a href="http://localhost:3000/users">http://localhost:3000/users</a></p><p>Register User on DB: <a href="http://localhost:3000/auth/register">http://localhost:3000/auth/register</a></p><p>Authenticate User on DB: <a href="http://localhost:3000/auth/authenticate">http://localhost:3000/auth/authenticate</a></p><p>Forgot Password Users on DB: <a href="http://localhost:3000/auth/forgot_password">http://localhost:3000/auth/forgot_password</a></p><p>Reset Password Users on DB: <a href="http://localhost:3000/auth/reset_password">http://localhost:3000/auth/reset_password</a></p><p>middlewares Auth on DB: <a href="http://localhost:3000/projects">http://localhost:3000/projects</a></p>'
    )
)
app.get('/users', async (request, response) => {
    const users = await userModel.find({})
    try {
        response.send(users)
    } catch (error) {
        response.status(500).send({ error: 'Find User on Server failed' })
    }
})
app.listen(3000, () => console.log('Node Express Server on-line on port 3000'))
// listen 3000 é um escutador de rotas em localhost:3000 que exibe um console no servidor
// a rota get '/' é a rota principal que envia uma resposta simples para o navegador cliente
// a rota get '/users' é a rota de listagem de usuários cadastrados no mongoDB Atlas
// users recebe o module userModel com método find com indicação de encontrar todos os usuários cadastrados no mongoDB Atlas pela {} vazia
// try envia uma resposta ao navegador cliente com o método send o conteúdo de users
// catch envia uma resposta ao navegador cliente com o método status com o código 500 e com o conteúdo de error
