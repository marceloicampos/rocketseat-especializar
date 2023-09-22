let n = 0

while (n < 10) {
    console.log(n)
    n++
    //n=n+1
    //n+=1
}

console.log('---a')

let fatorM = 5
let multiplicador = 1

while (multiplicador < 6) {
    multiplex = fatorM * multiplicador++
    console.log(multiplex)
}

console.log('---b')

let fatorF = 1
let fatorial = 5

while (fatorial >= 1) {
    fatorF = fatorF * fatorial
    fatorial--
}
console.log(fatorF)

console.log('---c')

n = 10

while (n < 10) {
    console.log('WHILE ' + n)
    n++
    //n=n+1
    //n+=1
} 
// acima não entra no While

n = 10

do {
    console.log('DO WHILE ' + n)
    n++
    //n=n+1
    //n+=1
} while (n < 10)
// acima entra no Do While, pois o Do While entra 1 vez na execução

console.log('---d')

n = 0
m = 1

do {
    r = n + m
    n++
    console.log(r)
} while (r <= 9)

// no DO WHILE temos a garantia de pelo menos uma execução de loop
// faça e depois verifique
// no WHILE não há garantia de execução de loop
// verifique e depois faça

console.log('---e')
