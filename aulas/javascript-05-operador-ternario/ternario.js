let num = 11

let res = num % 2
if (res == 0) {
    console.log('par')
} else console.log('impar')

num % 2 == 0 ? console.log('número par') : console.log('número impar')
// teste lógico ? se true : se false

let ter = !(num % 2) ? 'number par true' : 'number impar false'
// negamos o resultado da operação acima , pois a mesma retorna 0 que é false e para ficar true negamos a mesma
console.log(ter)

let num2 = 10
let res2 = num2 % 2 ? 'Par' : 'Impar'
console.log(res2)

// resto 0 => cai na condição Impar 0 é false na lógica
// resto 1 => cai na condição Par, 1 é true na lógica
// no caso acima o resto é 0 por isso a saída Impar

let num3 = 10
let res3 = !(num3 % 2) ? 'Par' : 'Impar'
console.log(res3)
// para funcionar corretamente podemos negar a operação
