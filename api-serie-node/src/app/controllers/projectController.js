const express = require('express')
const authMiddleware = require('../middlewares/auth')
const User = require('../models/user')
const Project = require('../models/project')
const Task = require('../models/task')
const router = express.Router()

// primeiro buscamos o express para usar rotas
// depois chamamos o auth middleware
// depois chamamos todos os nossos models (usuário, projetos e tarefas)
// e por último chamamos o método Router do Express para definir as rotas para os registros e autenticação de usuários

router.use(authMiddleware)
// estamos usando o auth middleware na interceptação de rota

router.get('/', async (req, res) => {
    const _id = req.userId
    const users = await User.findById({ _id })
    res.send({ ok: true, userId: _id, email: users.email })
})
// estamos criando a rota '/' que recebe um método get com res.send ok: true e acesso direto a userId

router.post('/create', async (req, res) => {
    try {
        const { title, description, tasks } = req.body
        const _id = req.userId
        const project = await Project.create({ title, description, user: _id })
        await Promise.all(
            tasks.map(async task => {
                const projectTask = new Task({ ...task, project: project._id })
                await projectTask.save()
                project.tasks.push(projectTask)
            })
        )
        await project.save()
        return res.send({ project })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new project ' })
    }
})

router.get('/list', async (req, res) => {
    try {
        const projects = await Project.find().populate(['user', 'tasks'])
        res.send({ projects })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading all projects ' })
    }
})

router.get('/list/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate(['user', 'tasks'])
        res.send({ project })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading unique projects ' })
    }
})

router.put('/update/:projectId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body
        // const _id = req.userId
        const project = await Project.findByIdAndUpdate(
            req.params.projectId,
            {
                title,
                description
            },
            { new: true }
        )
        project.tasks = []
        await Task.deleteMany({ project: project._id })
        await Promise.all(
            tasks.map(async task => {
                const projectTask = new Task({ ...task, project: project._id })
                await projectTask.save()
                project.tasks.push(projectTask)
            })
        )
        await project.save()
        return res.send({ project })
    } catch (error) {
        return res.status(400).send({ error: 'Error Updating new project ' })
    }
})

router.delete('/delete/:projectId', async (req, res) => {
    try {
        await Task.deleteMany({ project: req.params.projectId })
        await Project.findByIdAndRemove(req.params.projectId)
        res.send('Project Removed')
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error delete projects ' })
    }
})

module.exports = app => app.use('/projects', router)
// acima estamos recuperando o app como um parâmetro e retornando a adição de uma rota para o app
// a rota / vai chamar o projects
// acima indica ==> http://localhost:3000/projects
