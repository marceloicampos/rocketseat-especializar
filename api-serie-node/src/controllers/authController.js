const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email } = req.body

    try {
        if (await User.findOne({ email })) return res.status(400).send({ error: 'User email already exists' })
        const user = await User.create(req.body)
        user.password = undefined
        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
})

module.exports = app => app.use('/auth', router)
// acima estamos recuperando o app como um parâmetro e retornando a adição de uma rota para o app
// a rota auth/register vai chamar de registro e criação do usuário
// acima indica ==> http://localhost:3000/auth/register
