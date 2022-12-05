// 10 == 1010
// 11 == 1011

let n1 = 10
let n2 = 11
let resAnd = n1 & n2 // 1010 = 10
let resOr = n1 | n2 // 1011 = 10
let resXor = n1 ^ n2 // 0001 = 1
// acima: onde tiver equivalência de bits retorno 0 e onde for diferente retorno 1
// ou exclusivo somente é V se for um ou outro, ou seja, se for v f ou f v
let resBl = n1 << 1 // 10100
// deslocando 1 bit para a esquerda (dobrar um valor)
let resBr = n1 >> 1 // 101
// deslocando 1 bit para a direita (dividir uma valor pela metade)

console.log(resAnd)
console.log(resOr)
console.log(resXor)
console.log(resBl)
console.log(resBr)