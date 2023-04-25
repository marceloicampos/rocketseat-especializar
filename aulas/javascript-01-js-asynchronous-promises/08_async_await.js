const promessaOk = new Promise((resolve, reject) => {
    return resolve('OK')
})

const promessaError = new Promise((resolve, reject) => {
    return reject('ERROR')
})

async function startPromise() {
    try {
        const result = await promessaOk
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('promessa OK finalizada')
    }
}

startPromise()

promessaError
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('promessa ERROR finalizada')
    })
