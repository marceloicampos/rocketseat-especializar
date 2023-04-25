fetch('https://api.github.com/users/marceloicampos')
    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json().then(resName => console.log(resName)))
    .catch(error => console.log(error))

async function startPromise() {
    try {
        const response = await fetch('https://api.github.com/users/marceloicampos')
        const user = await response.json()
        const repos = await fetch(user.repos_url)
        const reposUser = await repos.json()
        console.log(reposUser)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('no final sempre roda')
    }
}

startPromise()

async function start() {
    const user = await fetch('https://api.github.com/users/marceloicampos').then(response => response.json())
    const userRepos = await fetch(user.repos_url).then(repos => repos.json())
    console.log(userRepos)
}

start().catch(error => console.log(error))
