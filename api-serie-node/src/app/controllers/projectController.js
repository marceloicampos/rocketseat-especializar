const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
// primeiro buscamos o express para usar rotas
// depois chamamos o método Router do Express para definir as rotas para os registros e autenticação de usuários
// depois chamamos o auth middleware

router.use(authMiddleware)
// estamos usando o auth middleware na interceptação de rota

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId })
})
// estamos criando a rota '/' que recebe um método get com res.send ok: true e acesso direto a userId

module.exports = app => app.use('/projects', router)
// acima estamos recuperando o app como um parâmetro e retornando a adição de uma rota para o app
// a rota / vai chamar o projects
// acima indica ==> http://localhost:3000/projects
