let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]

// console.log(`n1: ${n1}`)
// console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)

const player1 = {
    name: 'player1',
    energia: 100,
    vidas: 3,
    magia: 10
}

const player2 = {
    name: 'player2',
    energia: 101,
    vidas: 5,
    velocidade: 10
}

const player3 = {
    ...player1,
    ...player2
}

console.log(player3)

const soma = (v1, v2, v3, v4) => v1 + v2 + v3 + v4
let valores = [1, 4, 5, 10]

console.log(soma(...valores))
// acima espalhamos o valores 1, 4, 5 para cada parâmetros de entrada

const objs1 = document.getElementsByTagName('div')
// acima temos um html collections
const objs2 = [...document.getElementsByTagName('div')]
// acima temos um array de div

objs2.forEach(element => {
    console.log(element)
    element.innerHTML = 'Curso de Javascript'
})
// como o objs2 é um array, podemos usar o forEach para percorrer os elementos

console.log(objs1)
console.log(objs2)
