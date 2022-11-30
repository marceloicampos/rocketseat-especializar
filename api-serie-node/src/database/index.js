const mongoose = require('mongoose')
const pass = require('../config/configdb')

const username = pass.use
const password = pass.pwd
const cluster = pass.clu
const dbname = pass.dbn

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', () => console.log('Connected Successfully Mongo DB Altas'))

mongoose.Promise = global.Promise
module.exports = mongoose
