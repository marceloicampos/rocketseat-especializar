const mongoose = require('../../database')
// chamado o module mongoose pelo médulo do database já criado para criar o model

const TaskSchema = new mongoose.Schema({
    // criando um schema para as Tarefas, chamamos ele de TaskSchema e instanciamos um objeto mongoose.Schema
    // passando como parâmetro o objeto com as características das novas Tarefas, ou seja, passando os campos de uma tabela de tarefas, mas
    // indicamos tão somente as chaves que serão usadas no banco de dados (no caso mongoDB que é não relacional)
    // MUITO EMBORA Mongo seja não relacional, vamos realizar 2 relações
    // 1 - project irá se referir ao model project
    // 2 - assignedTo irá se referir de forma assinada a um usuário
    title: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', TaskSchema)
// acima estamos definindo nosso model Task, que será usado para criar as tarefas no banco de dado
// mongoose.model('nome do model', schema do model)
// https://mongoosejs.com/docs/guide.html

module.exports = Task
// exportando a Task (model Tasks) para ser utilizado em outros arquivos
