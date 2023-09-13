"use strict";
// npm install typescript --save-dev
// npx tsc --init (Creates a tsconfig.json with the recommended settings in the working directory)
// npx tsc file.ts (Compiles the specified files with default compiler options)
// npx tsc --version
// npx tsc --help
const user = {
    nome: 'Marcelo Campos',
    email: 'email@email.com',
    phone: 8599692
};
console.log(user.nome);
console.log(user.email);
console.log(user.phone);
const userTs = {
    nome: 'Marcelo Campos',
    email: 'email@email.com',
    phone: 8599692
};
console.log(userTs.nome);
console.log(userTs.email);
console.log(userTs.phone);
// -------------------------------------------------------------------------
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2.7575).toFixed(2));
// -------------------------------------------------------------------------
function showTicket0(userName, ticket) {
    console.log(`Olá ${userName ?? 'Usuário Padrão'}, seu ticket é: ${ticket}`);
}
showTicket0(null, 4321);
function showTicket1(user) {
    console.log(`Olá ${user.userName}, seu ticket é: ${user.ticket}`);
}
showTicket1({ userName: 'marcelo', ticket: 1234 });
// -------------------------------------------------------------------------
// Tipos primitivos
let info;
info = [1, 2, 3];
info = 'marcelo';
info = true;
info = 1234;
let load;
load = true;
let email;
email = 'email@email.com';
let tel;
tel = 55977445544;
let nulo;
nulo = null;
let indefinido;
indefinido = undefined;
// -------------------------------------------------------------------------
// Inferências de Tipos
let infoNameUser = 'marcelo';
// acima temos uma declaração explicita
let infoUser = 'marcelo';
infoUser = 'campos';
// acima temos um declaração implícita
// então temos exemplo de inferência de tipo, pois a declaração recebe um tipo e assim ela será tipada
// -------------------------------------------------------------------------
// Tipagens de Arrays
let numbers;
// acima temos um array de números e não aceita strings
numbers = [1, 2, 3, 4, 5];
let letters;
letters = ['a', 'b', 'c', 'd', 'e'];
// acima temos um array de strings e não aceita números
let phoneNumber;
phoneNumber = [859900, 859911];
let users;
users = ['Marcelo', 'Duda'];
// -------------------------------------------------------------------------
// Tipagens de Funções
function showMessages(message) {
    console.log(message);
    // se dermos um return message teremos um erro
    // sem o void e sem return temos inferência de tipo para void
}
// função sem retorno leva tipa void, com o void tipado não conseguimos fazer return
console.log(showMessages('marcelo'));
function showNumber(num) {
    // inferência explicita para number
    // o que fica fora () classifica o tipo do retorno da função
    return num;
}
console.log(showNumber(2));
// -------------------------------------------------------------------------
// OPERADOR UNION, onde uma variável pode aceitar mais de um tipo, usamos o pipe | para separar o tipos
function printUserId(id) {
    console.log(`O ID DO USUÁRIO E: ${id}`);
}
printUserId(101);
// -------------------------------------------------------------------------
// GENERICS
// com o union temos tipagens opcionais, com o generics deixamos a tipagem fixa e declarada usamos o sinal de < > dentro dos sinais indicamos o tipo
/**
 * S - state
 * T - Type
 * K - Key
 * V - Value
 * E - Element
 */
function useState() {
    // = string, caso não seja definido o tipo ele será string
    // NOTA: = string É O MESMO QUE DIZER QUE: caso não escolha number ou string, sempre será string
    let state;
    function set(newValue) {
        state = newValue;
    }
    function get() {
        return state;
    }
    return { get, set };
}
let state = useState();
console.log(state);
let newStateNumber = useState();
newStateNumber.set(123);
console.log(newStateNumber.get());
let newStateString = useState();
newStateString.set('marcelo');
console.log(newStateString.get());
let newState = useState();
newState.set('marcelo');
console.log(newState.get());
let userId;
let adminId;
userId = 1;
adminId = 'marcelo';
userId = undefined;
adminId = true;
let userResponse1 = {
    id: 123,
    userName: 'marcelo',
    avatar: 'logo'
};
let userResponse2 = {
    id: 123,
    userName: 'marcelo',
    avatar: 'logo'
};
userResponse1.id;
userResponse2.userName;
userResponse1.avatar;
function printCoord(point) {
    console.log(`The coordinates x value is ${point.x ?? 0}`);
    console.log("The coordinates y value is " + point.y);
}
printCoord({ x: undefined, y: 100 });
function printUser(userType) {
    console.log(`User ${userType.userName}`);
    console.log(`User ${userType.age}`);
}
printUser({ userName: 'marcelo', email: 'mail', age: 18 });
let newUser = {
    userName: 'marcelo',
    email: 'marcelo@com.br',
    age: 18
};
let infoUser3;
let infoGeral3 = {
    id: 1,
    name: 'marcelo',
    nickname: 'jack',
    level: 2
};
let newUser55 = {
    id: 2,
};
function registerNewUser555(user555) {
    console.log(`Id do User555 é ${user555.id}`);
}
registerNewUser555({ id: 1 });
