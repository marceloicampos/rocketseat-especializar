// // npm init + "type": "module",

// console.log('1 #############################')

// function imprimirDado(dado) {
//     console.log('Primeira Tarefa, depois um callBack de')
//     console.log(dado())
// }

// imprimirDado(() => {
//     return `Número Aleatório: ${(Math.random() * 10).toFixed(0)}`
// })

// // #####################################

// import http from 'https'
// // let http = require('https')
// // acima estamos usamos pelo CommonJS
// let api = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// http.get(api, res => {
//     console.log('2 #############################')
//     console.log('Após Executando a API assíncrona')
//     console.log('Status da Resposta, ' + res.statusCode)
// })

// console.log('2 #############################')
// console.log('Conectando API Primeiro')

// // #####################################

// setTimeout(() => {
//     console.log('3 #############################')
//     console.log('Executando o Timeout 3 segundos')
// }, 3000)

// // #####################################

// let aceite = false
// console.log('4 #############################')
// console.log('A - Pedindo Uber em Promise')

// // new Promise((resolve, reject) => {})

// const promise = new Promise((resolve, reject) => {
//     if (aceite == true) {
//         return resolve('C - Carro Chegou')
//     } else {
//         return reject('C - Carro NÃO Chegou')
//     }
// })

// console.log('B - Aguardando Carro')

// promise
//     // then captura o resolve
//     .then(result => {
//         console.log(result)
//     })
//     // catch captura o reject
//     .catch(error => {
//         console.log(error)
//     })
//     // finally executa independente do resolve ou reject
//     .finally(() => {
//         console.log('D - Promessa Finalizada')
//     })

// // #####################################

// fetch('https://api.github.com/users/marceloicampos')
//     //.then(response => console.log(response))
//     //
//     // .then(response => console.log(response.json()))
//     //
//     // .then(response => {
//     //   response.json()
//     //     .then(data => console.log(data))
//     // })
//     //
//     // .then(response => {
//     //   response
//     //       .json()
//     //       .then(data => {
//     //           fetch(data.gists_url)
//     //           .then(response => response.json())
//     //           .then(data => console.log(data))
//     //       })
//     // })
//     //
//     // .then(response => response.json())
//     // .then(data => fetch(data.repos_url))
//     // .then(res => res.json()
//     // .then(repos => console.log(repos)))
//     // .catch(error => console.log(error))
//     //
//     .then(response => response.json())
//     .then(data => fetch(data.gists_url))
//     .then(resposta => resposta.json()
//     .then(gists => console.log(gists)))
//     .catch(error => console.log(error))

// fetch('https://api.github.com/users/marceloicampos').then(res200 => console.log(`Status: ${res200.status}`))

// console.log('5 #############################')

// #####################################

// npm i axios

// import axios from 'axios'

// axios.get('https://api.github.com/users/marceloicampos')
// // .then(res => console.log(res.data))
// .then(res =>  axios.get(res.data.repos_url))
// .then(repos => console.log(repos.data))
// .catch(error => console.log(error))

// axios.get('https://api.github.com/users/marceloicampos')
// .then(res => {
//     const user = res.data
//     axios.get(user.repos_url)
//     .then(repos => console.log(repos.data))
//     .catch(err => console.log(err))
// })
// .catch(error => console.log(error))

// #####################################

// import axios from 'axios'

// Promise.all([axios.get('https://api.github.com/users/marceloicampos'), axios.get('https://api.github.com/users/maykbrito')])
//     .then(responses => {
//         console.log(responses[0].data.login)
//         console.log(responses[1].data.login)
//         console.log(responses.length)
//     })
//     .catch(error => console.log(error))

// #####################################

// const promessa = new Promise((resolve, reject) => {
//     // return resolve ('OK')
//     return reject ('ERROR')
// })

// async function startPromise() {
//     try{
//         const result = await promessa
//         console.log(result)
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('no final sempre roda');
//     }
// }

// startPromise()

// promessa
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('promessa finalizada')
//     })

// #####################################

// fetch('https://api.github.com/users/marceloicampos')
// .then(response => response.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json()
// .then(resName => console.log(resName)))
// .catch(error => console.log(error))

// async function startPromise2() {
//     try {
//         const response = await fetch('https://api.github.com/users/marceloicampos')
//         const user = await response.json()
//         const repos = await fetch(user.repos_url)
//         const reposName = await repos.json()
//         console.log(reposName)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log('no final sempre roda')
//     }
// }

// startPromise2()

// #####################################

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
