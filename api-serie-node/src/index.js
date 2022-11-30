const express = require('express')

const app = express()

const userModel = require('./models/user')

app.use(express.json())

require('./controllers/authController')(app)

app.listen(3000, () => console.log('Express Rodando na porta 3000'))
app.get('/', (req, res) => res.send('Server Rodando na Porta 3000, com Mongo DB Atlas. Usuários Cadastrados: localhost:3000/users'))
app.get('/users', async (request, response) => {
    const users = await userModel.find({})
    try {
        response.send(users)
    } catch (error) {
        response.status(500).send(error)
    }
})
