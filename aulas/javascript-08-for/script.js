// estrutura de repetição ou iterações
// FOR loops definidos - WHILE e DO WHILE loops indefinidos

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
    // if (i % 2 == 1) {
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

console.log('---');

let arrayABC = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < arrayABC.length; i++) {
    const element = arrayABC[i];
    console.log('for ' + element);
}

arrayABC.forEach(element => {
    console.log('forEach ' + element);
});

for (const keyPosition in arrayABC) {
    if (Object.hasOwnProperty.call(arrayABC, keyPosition)) {
        const element = arrayABC[keyPosition];
        const position = keyPosition
        console.log('for in element ' + element);
        console.log('for in position ' + position);
    }
}

for (const iteratorElement of arrayABC) {
    console.log('for of ' + iteratorElement);
}
