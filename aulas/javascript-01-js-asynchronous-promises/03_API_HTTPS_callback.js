// com o node instalado, rode o comando abaixo
// npm init -y
// dentro do arquivo package.json inclua essa linha
// "type": "module",
// não precisamos instalar https

// let https = require('https')
// acima estamos usamos pelo CommonJS
// não é necessário npm init nem incluir type module

import https from 'https'
let api = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(api, res => {
    console.log('Após Executando a API assíncrona')
    console.log('Status da Resposta: ' + res.statusCode)
})
// https.get é uma callback

console.log('Conectando API Primeiro')
