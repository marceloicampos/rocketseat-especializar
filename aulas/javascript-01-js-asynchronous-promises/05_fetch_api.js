fetch('https://api.github.com/users/marceloicampos')
    // .then(response => console.log(response))

    // .then(response => console.log(response.json()))

    // .then(response => {
    //     response.json().then(data => console.log(data))
    // })

    // .then(response => {
    //     response.json().then(data => {
    //         fetch(data.repos_url)
    //             .then(response => response.json())
    //             .then(data => console.log(data))
    //     })
    // })

    // .then(response => response.json())
    // .then(data => fetch(data.gists_url))
    // .then(resposta => resposta.json())
    // .then(gists => console.log(gists))
    // .catch(error => console.log(error))

    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    .then(repos => console.log(repos))
    .catch(error => console.log(error))

fetch('https://api.github.com/users/marceloicampos').then(res200 => console.log(`Status: ${res200.status}`))
