console.log('CHAMADA DE FUNÇÕES')

function sum(a, b) {
    console.log('soma ' + (a + b))
}

for (let i = 0; i < 10; i++) {
    sum(1, 1)
}

function mudarTexto() {
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML = 'Nada'
    d2.innerHTML = 'Não'
    d3.innerHTML = 'Querido'
}

// mudarTexto()

console.log('---')

console.log('FUNCTION RETURN')

function soma() {
    return 2 + 2
}

console.log(soma())

console.log('---')

function canal() {
    console.log('cursoJavascript')
    return 'CursoJava'
}

canal()
console.log(canal())
let curso = canal()
console.log(curso)

console.log('---')

function parImpar() {
    let n1 = 3
    let n2 = 7
    let res = n1 * n2
    if (res % 2 == 0) {
        return res + ' é par'
    }
    if (res % 2 !== 0) {
        return res + ' é impar'
    }
}
console.log(parImpar())

console.log('---')

console.log('FUNÇÕES COM PARÂMETROS')

let valor = 0

function add(v) {
  return valor + v
}

const add10 = add(10)

const valorParams = add10

function somar(a = valorParams, b = valorParams) {
    // acima temos valor padrão = 0
    return a + b
}

console.log(somar())

console.log('---')
