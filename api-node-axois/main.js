const url = 'http://localhost:5000/api'

function getUsers() {
    axios
        .get(url)
        .then(response => {
            // console.log(response.data)
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios
        .post(url, newUser)
        .then(response => {
            // console.log(response.data)
            alertApiPost.textContent = response.data
        })
        .catch(error => console.error(error))
}

const newUser = {
    name: 'Jakeliny Gracielly',
    avatar: 'https://picsum.photos/200/300',
    city: 'São Paulo'
}

getUsers()
addNewUser(newUser)
