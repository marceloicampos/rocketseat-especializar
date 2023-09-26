function* cores() {
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const iteratorCor = cores()

console.log(iteratorCor.next().value)
console.log(iteratorCor.next().value)
console.log(iteratorCor.next().value)
console.log(iteratorCor.next().value)

function* perguntas() {
    const nome = yield 'Qual seu nome ? '
    const esporte = yield 'Qual seu esporte ? '
    return 'Seu nome é ' + nome + ' e seu esporte é ' + esporte
}

const iteratorPerguntas = perguntas()

console.log(iteratorPerguntas.next().value)
console.log(iteratorPerguntas.next('Marcelo').value)
console.log(iteratorPerguntas.next('Corrida').value)

function* contador() {
    let i = 0
    while (true) {
        yield i++
    }
}

const iteratorContador = contador()

console.log(iteratorContador.next().value)
console.log(iteratorContador.next().value)
console.log(iteratorContador.next().value)
console.log(iteratorContador.next().value)

console.log('---');

function* conta() {
    let i = 0
    while (true) {
        yield i++
        if (i>5) {
            break
        }
    }
}

const itc1 = conta()

for (let c of itc1) {
    console.log(c);
}

console.log('---');

const itc2 = conta()

for (let i = 0; i < 5; i++) {
    console.log(itc2.next().value);
}
