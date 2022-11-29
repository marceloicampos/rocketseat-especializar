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

getUsers()
