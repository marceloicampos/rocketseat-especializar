// com o node instalado, rode o comando abaixo
// npm init -y
// dentro do arquivo package.json inclua essa linha
// "type": "module",
// precisamos instalar npm i axios

import axios from 'axios'

async function axiosFetchRepos() {
    try {
        const user = await axios.get('https://api.github.com/users/marceloicampos')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch (e) {
        console.log(e)
    }
}

axiosFetchRepos()

axios
    .get('https://api.github.com/users/marceloicampos')
    .then(res => axios.get(res.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
