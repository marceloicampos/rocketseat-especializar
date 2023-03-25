const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
// chamando o path para com caminhos de diretórios no nodeJs
// chamando o nodemailer para geração de fake mail
// chamando o nodemailer-express-handlebars para usar templates de e-mail

// segua abaixo nosso transporte de e-amil e nosso template de e-mail

const {
    host,
    port,
    auth: { user },
    auth: { pass }
} = require('../config/mail.json')
// usando a desestruturação de objetos pegamos somente os dados desejados

const transport = nodemailer.createTransport({
    // chamando o transport de email fornecido pelo https://mailtrap.io/
    host,
    port,
    auth: {
        user,
        pass
    }
})

transport.use(
    // utilizando o transport de email
    'compile',
    hbs({
        viewEngine: {
            defaultLayout: undefined,
            partialsDir: path.resolve('./src/resources/mail/')
        },
        viewPath: path.resolve('./src/resources/mail/'),
        extName: '.html'
    })
)

module.exports = transport
// estamos exportando o módulo transport
