const pass = require('../nodejs-07-test-sequelize/config/configdb')

const username = pass.use
const password = pass.pwd
const dbname = pass.dbn

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(dbname, username, password, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error))
