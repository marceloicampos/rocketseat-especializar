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

let m = 1
let pax = 11
let pares = 0 

for (let i = m; i < pax; i++) {
  console.log(i)
  if(i%2!=0) {
    continue
  }
  // acima temos: se for impar pare essa iteração e continue o loop
  // if (i%2 == 0) {
    //pares++
  // }
  pares++
}
console.log("quantidades de números pares " + pares)
