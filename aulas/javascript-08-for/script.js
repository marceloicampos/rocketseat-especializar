// estrutura de repetição ou iterações
// FOR loops definidos - WHILE loops indefinidos

for (let i = 1; i < 11; i++) {
    // inicial; condição; controle
    console.log(i)
    // iteração de 1 até 10
}

// for (let i = 1; i > 0; i++) {
//   // condição de LOOP INFINITO
//   console.log(i);
// }

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i + ' é par')
    }
    if (i % 2 != 0) {
        console.log(i + ' é impar')
    }
}

let array = [10, 20, 30, 40, 50]

for (let i = 0; i < array.length; i++) {
    console.log('position ' + i)
    const element = array[i]
    console.log('element ' + element)
}

for (position in array) {
    console.log('in ' + position)
}

for (element of array) {
    console.log('of ' + element)
}
