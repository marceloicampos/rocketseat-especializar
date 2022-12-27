const mongoose = require('mongoose')
const pass = require('../config/configdb')
// chamando o module mongoose
// chamado as configurações do banco de dados (como username, password, cluster e dbname)

const username = pass.use
const password = pass.pwd
const cluster = pass.clu
const dbname = pass.dbn
// criando variáveis das configurações do mongoDB

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// realizando a conexão com mongoDB (usando o mongoose junto com a string de conexão informada pelo Atlas MongoDB)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', () => console.log('Connected Successfully Mongo DB Altas'))
// criando avisos de erro de conexão com o MongoDB e sucesso de conexão

mongoose.Promise = global.Promise
module.exports = mongoose
// indicando o tipo de Promise utilizado no pelo mongoose e pelo nodeJS
// exportando o mongoose para ser utilizado em outros arquivos
