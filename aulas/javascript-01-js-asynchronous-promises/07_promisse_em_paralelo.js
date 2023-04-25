// com o node instalado, rode o comando abaixo
// npm init -y
// dentro do arquivo package.json inclua essa linha
// "type": "module",
// precisamos instalar npm i axios

import axios from 'axios'

Promise.all([axios.get('https://api.github.com/users/marceloicampos'), axios.get('https://api.github.com/users/maykbrito')])
    .then(responses => {
        console.log(responses[0].data.login)
        console.log(responses[1].data.login)
        console.log(responses.length)
        console.log(responses.data.length)
    })
    .catch(error => console.log(error))
