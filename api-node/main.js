const url = 'http://localhost:5000/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => (renderApiResult.textContent = JSON.stringify(data)))
        // o JSON.stringify é um método converte um valor JavaScript em uma string JSON
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
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
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApiPost.textContent = data))
        .catch(error => console.error(error))
}

const newUser = {
    name: 'Lorem PicSum',
    avatar: 'https://picsum.photos/200/300',
    city: 'United States'
}

function updateUser(id, updatedUser) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApiPut.textContent = data))
        .catch(error => console.error(error))
}

const updatedUser = {
    name: 'Jakeliny Gracielly',
    avatar: 'https://picsum.photos/200/300',
    city: 'Paraná'
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApiDelete.textContent = data))
        .catch(error => console.error(error))
}

addUser(newUser)
updateUser(1, updatedUser)
getUsers()
getUser(1)
deleteUser(11)
