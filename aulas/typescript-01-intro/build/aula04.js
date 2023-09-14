"use strict";
let myName = 'Marcelo';
// acima temos inferência de tipo automática pelo TS
// se não tipamos, o TS já fornece o tipo, no caso string
myName = 'Caio';
// se tentar mudar para um number vai da erro no TS
// no JS puro não acontece inferência automática de tipo
// no Js puro poderiamos inserir um tipo number sem erro
let valor = 0; // int, float, number tanto faz
valor = 0.5;
// não dá erro com 0.5, pois continua sendo number
let otherName;
otherName = 'Duda';
// nesse caso temos o tipo any (qualquer coisa), não é interessante usar tipo any
// usar tipo any siginifica que o tipo pode ser qualquer coisa e assim
// paramos com o conceito de tipagem, mas há casos e casos de uso
let simpleName;
simpleName = 'opovo';
// agora estamos com tipagem no tipo string sem inferir
console.log(simpleName);
// outro ponto é: sempre que houver declaração no TS temos que ter atribuição
// no TS todo variável declarada deve ser tipada e atribuída
// caso contrário teremos erro no TS
