// https://nodejs.dev/en/learn/
const express = require('express')
const cors = require('cors')
const app = express()
app.listen(5500, () => console.log('Rodando na porta 5500'))
app.use(cors())
app.use(express.json())

// ##############################################################

let users = [
    {
        id: 1,
        name: 'Marcelo Campos',
        avatar: 'https://avatars.githubusercontent.com/u/71357926?v=4',
        city: 'Fortaleza'
    }
]

// GET ###########################################################
app.route('/api').get((req, res) =>
    res.json({
        users
    })
)

app.route('/api/:id').get((req, res) => {
    const userId = req.params.id
    const user = users.find(user => Number(user.id) === Number(userId))
    if (!user) {
        return res.json('User Not Found!')
    }
    res.json(user)
})

// POST ###########################################################
app.route('/api').post((req, res) => {
    // const lastId = users[users.length - 1].id
    let lastId
    if (users.length == 0) {
        lastId = 0
    } else lastId = users[users.length - 1].id
    users.push({
        id: lastId + 1,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city
    })
    res.json('Saved User')
})

// PUT ###########################################################
app.route('/api/:id').put((req, res) => {
    const userId = req.params.id
    const user = users.find(user => Number(user.id) === Number(userId))
    if (!user) {
        return res.json('User Not Found!')
    }
    const updatedUser = {
        ...user,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city
    }

    users = users.map(user => {
        if (Number(user.id) === Number(userId)) {
            user = updatedUser
        }
        return user
    })
    res.json('Updated User')
})

// DELETE ###########################################################
app.route('/api/:id').delete((req, res) => {
    const userId = req.params.id
    users = users.filter(user => Number(user.id) !== Number(userId))
    res.json('Deleted User')
})
