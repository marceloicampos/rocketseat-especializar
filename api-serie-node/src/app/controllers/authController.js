// o authController é um MVC que é um termo em inglês que significa Model View and Controller (ou modelo de visão e controle)
// que facilita a troca de informações entre a interface do usuário com os dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.

const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')
// primeiro buscamos o express para usar rotas
// depois Model User para as ações de cadastro e consulta de usuários
// depois chamamos o método Router do Express para definir as rotas para os registros e autenticação de usuários
// usamos bcrypt para retorna senhas criptografadas
// usamos a jwt para criar token de autenticação
// importamos o hash secret para geração de token

router.post('/register', async (req, res) => {
    // estamos criando a rota '/register' que recebe um método post numa função assíncrona para tratar a Promise com await
    const { email } = req.body
    // capturamos o email da requisição do body
    try {
        if (await User.findOne({ email })) return res.status(400).send({ error: 'User email already exists' })
        // vá no usuário SE o email informado já existir, retornamos um erro 400 e a mensagem de erro, caso contrário continue a execução
        const user = await User.create(req.body)
        // criando um novo usuário user pelo método create do Model User que recebe os dados do req.body
        // dados: name, email e password, o dado createAt já tem padrão default de data e hora
        // o await indica que PRIMEIRO que a Promise vai ser resolvida (user.create()) e depois continuamos o cÓdigo
        user.password = undefined
        // retiramos a senha do objeto user para ser retornado no response um undefined
        return res.send({ user, token: generateToken({ id: user.id }) })
        // depois de criado o usuário, retornamos a resposto do usuário criado com o password como undefined
        // como estamos criando o token por função já repassamos o token para o usuário
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
        // se der erro, retornamos o erro com método status 400 e a mensagem de falha de registro
    }
})

function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret, { expiresIn: 86400 })
}
// função para gerar o token

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body
    // capturamos o email e o password da requisição do body
    const user = await User.findOne({ email }).select('+password')
    // coletamos a informação única do email e a informação única do password retirada do Banco User
    if (!user) return res.status(400).send({ error: 'User not found' })
    // se o user não existir retorne "usuário não encontrado"
    if (!(await bcrypt.compare(password, user.password))) return res.status(400).send({ error: 'Invalid password' })
    // se a comparação entre a password informada e a user password não corresponder retorne "senha inválida"
    user.password = undefined
    // removemos a exibição da senha do objeto user para ser retornado no response um undefined

    // const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 })
    // criamos um token usando o jwt com base na assinatura de inscrição, baseados no id do usuário e no hash secreto
    // para gerar um hash md5 usamos https://www.md5hashgenerator.com/
    // passando ao final um tempo de expiração do token (no caso 1 dia)
    // estamos usando a function generateToken para gerar o token então comentamos essa constante

    res.send({ user, token: generateToken({ id: user.id }) })
    // envie a resposta dados do usuário e do seu token
    // nota: a cada nova autenticação geramos um novo token
})

module.exports = app => app.use('/auth', router)
// acima estamos recuperando o app como um parâmetro e retornando a adição de uma rota para o app
// a rota auth/register vai chamar o registro e a função de criação do usuário
// acima indica ==> http://localhost:3000/auth/register
// acima indica ==> http://localhost:3000/auth/authenticate