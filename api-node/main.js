const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => (renderApiResult.textContent = JSON.stringify(data)))
        // o JSON.stringify é um método converte um valor JavaScript em uma string JSON
        .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

getUsers()
getUser()
