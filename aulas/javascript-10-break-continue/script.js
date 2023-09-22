// break - parada de loop e continua a execução do script
// continue - parada de iteração e continua o loop

let n = 1
let max = 1000

while (n<=max) {
  if (n>10) {
    break
  }
  console.log(n)
  n++
}

console.log('---');

let m = 0
let pax = 11
let impares = 0
let pares = 0 

for (let i = m; i < pax; i++) {
  if(i%2!=0) {
    continue
  }
  impares++
  // acima temos: se for impar pare essa iteração e continue o loop
}

for (let i = m; i < pax; i++) {
  if (i%2==0) {
    continue
  }
  pares++
  // acima temos: se for par pare essa iteração e continue o loop
}

console.log("quantidades de números impares " + impares)
console.log("quantidades de números pares " + pares)
