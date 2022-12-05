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
