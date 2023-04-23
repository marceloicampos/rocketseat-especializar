const mongoose = require('../../database')
// chamado o module mongoose pelo médulo do database já criado para criar o model
const bcrypt = require('bcryptjs')
// importando a biblioteca bcrypt

const ProjectSchema = new mongoose.Schema({
    // criando um schema para os Projetos, chamamos ele de ProjectSchema e instanciamos um objeto mongoose.Schema
    // passando como parâmetro o objeto com as características dos novos Projetos, ou seja, passando os campos de uma tabela de projetos, mas
    // indicamos tão somente as chaves que serão usadas no banco de dados (no caso mongoDB que é não relacional)
    // MUITO EMBORA Mongo seja não relacional, vamos realizar 2 relações
    // 1 - user irá se referir ao model User
    // 2 - task irá se referir ao model Task
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Project = mongoose.model('Project', ProjectSchema)
// acima estamos definindo nosso model Project, que será usado para criar os projetos no banco de dado
// mongoose.model('nome do model', schema do model)
// https://mongoosejs.com/docs/guide.html

module.exports = Project
// exportando o Project (model Project) para ser utilizado em outros arquivos
