// 10 == 00001010
// 11 == 00001011
let n1 = 10
let n2 = 11
let n32 = 32
let resAnd = n1 & n2 // 1010 = 10
// tabela verdade do E
let resOr = n1 | n2 // 1011 = 11
// tabela verdade do OU
let resXor = n1 ^ n2 // 0001 = 1
// tabela verdade do OU EXCLUSIVO
// acima: onde tiver equivalência de bits retorno 0 e onde for diferente retorno 1
// ou exclusivo somente é V se for um ou outro, ou seja, se for v f ou f v
let resBl = n1 << 1 // 00010100 == 10100
// deslocando 1 bit para a esquerda (dobrar um valor)
let resBr = n1 >> 1 // 00000101 == 101
// deslocando 1 bit para a direita (dividir uma valor pela metade)
let res64 = n32 << 1

console.log(resAnd)
console.log(resOr)
console.log(resXor)
console.log(resBl)
console.log(resBr)
console.log(res64)
