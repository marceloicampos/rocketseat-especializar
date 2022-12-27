// o authController é um MVC que é um termo em inglês que significa Model View and Controller (ou modelo de visão e controle)
// que facilita a troca de informações entre a interface do usuário com os dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.

const express = require('express')
const User = require('../models/user')
const router = express.Router()
// primeiro buscamos o express para usar rotas
// depois Model User para as ações de cadastro de usuários
// e depois chamamos o método Router do Express para definir as rotas para os registros de usuários

router.post('/register', async (req, res) => {
    // estamos criando a rota '/register' que recebe um método post numa função assíncrona para tratar a Promise com await
    const { email } = req.body
    
    try {
        if (await User.findOne({ email })) return res.status(400).send({ error: 'User email already exists' })
        // vá no usuário SE o email informado já existir, retornamos um erro 400 e a mensagem de erro, caso contrário continue a execução
        const user = await User.create(req.body)
        // criando um novo usuário user pelo método create do Model User que recebe os dados do req.body
        // dados: name, email e password, o dado createAt já tem padrão default de data e hora
        // o await indica que PRIMEIRO que a Promise vai ser resolvida (user.create()) e depois continuamos o cÓdigo
        user.password = undefined
        // retiramos a senha do objeto user para ser retornado no response um undefined
        return res.send({ user })
        // depois de criado o usuário, retornamos a resposto do usuário criado com o password como undefined
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
        // se der erro, retornamos o erro com método status 400 e a mensagem de falha de registro
    }
})

module.exports = app => app.use('/auth', router)
// acima estamos recuperando o app como um parâmetro e retornando a adição de uma rota para o app
// a rota auth/register vai chamar o registro e a função de criação do usuário
// acima indica ==> http://localhost:3000/auth/register
