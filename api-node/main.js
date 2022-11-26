const url = 'http://localhost:5000/api'

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

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => (alertApi.textContent = data))
        .catch(error => console.error(error))
}

const newUser = {
    name: 'Lorem PicSum',
    avatar: 'https://picsum.photos/200/300',
    city: 'United States'
}

addUser(newUser)
getUsers()
getUser()
