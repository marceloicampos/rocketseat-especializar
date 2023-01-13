// npm install typescript --save-dev
// npx tsc --init (Creates a tsconfig.json with the recommended settings in the working directory)
// npx tsc file.ts (Compiles the specified files with default compiler options)
// npx tsc --version
// npx tsc --help
var user = {
    nome: 'Marcelo Campos',
    email: 'email@email.com',
    phone: 8599692
};
console.log(user.nome);
console.log(user.email);
console.log(user.phone);
var userTs = {
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
    console.log("Ol\u00E1 ".concat(userName !== null && userName !== void 0 ? userName : 'Usuário Padrão', ", seu ticket \u00E9: ").concat(ticket));
}
showTicket0(null, 4321);
function showTicket1(user) {
    console.log("Ol\u00E1 ".concat(user.userName, ", seu ticket \u00E9: ").concat(user.ticket));
}
showTicket1({ userName: 'marcelo', ticket: 1234 });
// -------------------------------------------------------------------------
// Tipos primitivos
var info;
info = [1, 2, 3];
info = 'marcelo';
info = true;
info = 1234;
var load;
load = true;
var email;
email = 'email@email.com';
var tel;
tel = 55977445544;
var nulo;
nulo = null;
var indefinido;
indefinido = undefined;
// -------------------------------------------------------------------------
// Inferências de Tipos
var infoNameUser = 'marcelo';
// acima temos uma declaração explicita
var infoUser = 'marcelo';
infoUser = 'campos';
// acima temos um declaração implícita
// então temos exemplo de inferência de tipo, pois a declaração recebe um tipo e assim ela será tipada
// -------------------------------------------------------------------------
// Tipagens de Arrays
var numbers;
// acima temos um array de números e não aceita strings
numbers = [1, 2, 3, 4, 5];
var letters;
letters = ['a', 'b', 'c', 'd', 'e'];
// acima temos um array de strings e não aceita números
var phoneNumber;
phoneNumber = [859900, 859911];
var users;
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
    console.log("O ID DO USU\u00C1RIO E: ".concat(id));
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
    var state;
    function set(newValue) {
        state = newValue;
    }
    function get() {
        return state;
    }
    return { get: get, set: set };
}
var newStateNumber = useState();
newStateNumber.set(123);
newStateNumber.get();
var newStateString = useState();
newStateString.set('marcelo');
newStateString.get();
var newState = useState();
newState.set('marcelo');
newState.get();
var userId;
var adminId;
userId = 1;
adminId = 'marcelo';
userId = undefined;
adminId = true;
var userResponse = {
    id: 123,
    userName: 'marcelo',
    avatar: 'logo'
};
userResponse.id;
userResponse.userName;
userResponse.avatar;
function printCoord(point) {
    var _a;
    console.log("The coordinates x value is ".concat((_a = point.x) !== null && _a !== void 0 ? _a : 0));
    console.log("The coordinates y value is " + point.y);
}
printCoord({ x: undefined, y: 100 });
function printUser(userType) {
    console.log("User ".concat(userType.userName));
    console.log("User ".concat(userType.age));
}
printUser({ userName: 'marcelo', email: 'mail', age: 18 });
var newUser = {
    userName: 'marcelo',
    email: 'marcelo@com.br',
    age: 18
};
var infoUser3;
var infoGeral3 = {
    id: 1,
    name: 'marcelo',
    nickname: 'jack',
    level: 2
};
var newUser55 = {
    id: 2
};
function registerNewUser555(user555) {
    console.log("Id do User555 \u00E9 ".concat(user555.id));
}
registerNewUser555({ id: 1 });
