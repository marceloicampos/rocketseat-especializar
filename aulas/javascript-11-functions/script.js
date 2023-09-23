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

let numReturn = soma()

console.log(soma())
// o console log vai imprimir o retorno da função
console.log(numReturn)

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
    console.log('res é ' + res)
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

let valor = 1

function add(v) {
    return valor + v
}

const add10 = add(10)

const valorParams = add10

function somar(a = valorParams, b = valorParams) {
    // acima temos valor padrão = 0
    return a + b
}

console.log('valor ' + somar())

console.log('---')

console.log('PARÂMETROS REST')

function somarValores(a, ...valores) {
    let res = 0
    for (let i = 0; i < valores.length; i++) {
        res = res + a + valores[i]
        // ENTENDA: valores[i] é valor de cada posição do array de valores
        // a cada iteração
    }
    return res
}

console.log('somarValores > ' + somarValores(1, 10, 5, 2, 15, 8))

function somarOfValores(...valores) {
    let res = 0
    for (valor of valores) {
        res = res + valor
    }
    return res
}

console.log('somarOfValores > ' + somarOfValores(10, 5, 2, 15, 8))

function somarInValores(...valores) {
    let res = 0
    for (elemento in valores) {
        res = res + valores[elemento]
    }
    return res
}

console.log('somarInValores > ' + somarInValores(10, 5, 2, 15, 8))

console.log('---')

console.log('FUNÇÕES ANÔNIMAS')

let anonymous = function (an1, an2) {
    return an1 + an2
}

console.log(anonymous(10, 5))

let rest = function (...lores) {
    let res = 0
    for (let i = 0; i < lores.length; i++) {
        res = res + lores[i]
    }
    return res
}

console.log(rest(10, 6))

const fun = new Function('vv1', 'vv2', 'return vv1 + vv2')
// Função construtor

console.log(fun(10, 7))

console.log('---')

console.log('ARROW FUNCTION ou LAMBDAS')

let arrow = (ar1, ar2) => {
    return ar1 + ar2
}

console.log(arrow(10, 8))

const simpleArrow = nn => {
    return nn
}

console.log(simpleArrow(19))

const simpleSimpleArrow = nnn => nnn + 1

console.log(simpleSimpleArrow(19))

console.log('---')

console.log('FUNÇÕES ANINHADAS')

const somaSoma = (...values) => {
    const somarSomar = val => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }
    return somarSomar(values)
}

console.log(somaSoma(10, 5, 15))
const itensDeValor = [12, 8, 10]
console.log(somaSoma(...itensDeValor))
