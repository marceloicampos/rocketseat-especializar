// ESTÁGIOS DAS PROMISES
// 01 - PENDING - PENDENTE
// 02 - FULFILLED - CONCLUÍDA COM SUCESSO
// 03 - REJECT - REJEITADA COM ERRO
// 04 - SETTLED - FOI CONCLUÍDA COM SUCESSO OU COM ERRO, MAS FOI CONCLUÍDA

let aceite = false
// altere para true para "carro chegou"
console.log('A - Pedindo Uber em Promise')

const promise = new Promise((resolve, reject) => {
    if (aceite == true) return resolve('C - Carro Chegou')
    else return reject('C - Carro NÃO Chegou')
})

console.log('B - Aguardando Carro')

promise
    // then captura o resolve
    .then(result => {
        console.log(result)
    })
    // catch captura o reject
    .catch(error => {
        console.log(error)
    })
    // finally executa independente do resolve ou reject
    .finally(() => {
        console.log('D - Promessa Finalizada')
    })
