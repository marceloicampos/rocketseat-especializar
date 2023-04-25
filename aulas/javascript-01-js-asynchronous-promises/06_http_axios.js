// com o node instalado, rode o comando abaixo
// npm init -y
// dentro do arquivo package.json inclua essa linha
// "type": "module",
// precisamos instalar npm i axios

import axios from 'axios'

axios
    .get('https://api.github.com/users/marceloicampos')
    .then(res => {
        const user = res.data
        axios
            .get(user.repos_url)
            .then(repos => console.log(repos.data))
            .catch(err => console.log(err))
    })
    .catch(error => console.log(error))

axios
    .get('https://api.github.com/users/marceloicampos')
    .then(res => {
        const user = res.data
        return axios.get(user.repos_url)
    })
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))

axios
    .get('https://api.github.com/users/marceloicampos')
    .then(res => axios.get(res.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
