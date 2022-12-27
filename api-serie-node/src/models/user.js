const mongoose = require('../database')
// chamado o module mongoose pelo médulo do database já criado para criar o model

const bcrypt = require('bcryptjs')
// importando a biblioteca bcrypt

const UserSchema = new mongoose.Schema({
    // criando um schema para o usuário, chamamos ele de UserSchema e instanciamos um objeto mongoose.Schema
    // passando como parâmetro o objeto com as características do usuário, ou seja, passando os campos de uma tabela de usuário, mas
    // indicamos tão somente as chaves que serão usadas no banco de dados (no caso mongoDB que é não relacional)
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function (next) {
    // o pré é um método que ocorre antes de salvar no banco de dados
    const hash = await bcrypt.hash(this.password, 10)
    // o método hash é usado para criptografar a senha, o hash recebe em await o método hash da biblioteca bcrypt
    // e o primeiro parâmetro indica o que será criptografado
    // e o segundo parâmetro é o número de vezes que a senha será criptografada
    this.password = hash
    // pegue este password e aplique um hash ao mesmo
    next()
})
// https://www.npmjs.com/package/bcrypt

const User = mongoose.model('User', UserSchema)
// acima estamos definindo nosso model User, que será usado para criar os usuários no banco de dado
// mongoose.model('nome do model', schema do model)
// https://mongoosejs.com/docs/guide.html

module.exports = User
// exportando o User (model User) para ser utilizado em outros arquivos