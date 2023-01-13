// npm install typescript --save-dev
// npx tsc --init (Creates a tsconfig.json with the recommended settings in the working directory)
// npx tsc file.ts (Compiles the specified files with default compiler options)
// npx tsc --version
// npx tsc --help

const user = {
  nome: 'Marcelo Campos',
  email: 'email@email.com',
  phone: 8599692
}

console.log(user.nome);
console.log(user.email);
console.log(user.phone);


type UserTs = {
  nome: string
  email: string
  phone: number
}

const userTs = {
  nome: 'Marcelo Campos',
  email: 'email@email.com',
  phone: 8599692
} as UserTs

console.log(userTs.nome);
console.log(userTs.email);
console.log(userTs.phone);

// -------------------------------------------------------------------------

function sum(a: number, b: number) {
  return a + b
}

console.log(sum(2, 2.7575).toFixed(2));

// -------------------------------------------------------------------------

function showTicket0(userName: string | null, ticket: number) {
  console.log(`Olá ${userName ?? 'Usuário Padrão'}, seu ticket é: ${ticket}`)
}

showTicket0(null, 4321)

// -------------------------------------------------------------------------

type User = {
  userName: string
  ticket: any
}

function showTicket1(user: User) {
  console.log(`Olá ${user.userName}, seu ticket é: ${user.ticket}`)
}

showTicket1({ userName: 'marcelo', ticket: 1234 })

// -------------------------------------------------------------------------

// Tipos primitivos

let info: any

info = [1, 2, 3]
info = 'marcelo'
info = true
info = 1234

let load: boolean
load = true

let email: string
email = 'email@email.com'

let tel: number
tel = 55977445544

let nulo: null
nulo = null

let indefinido: undefined
indefinido = undefined

// -------------------------------------------------------------------------

// Inferências de Tipos

let infoNameUser: string = 'marcelo'
// acima temos uma declaração explicita
let infoUser = 'marcelo'
infoUser = 'campos'
// acima temos um declaração implícita
// então temos exemplo de inferência de tipo, pois a declaração recebe um tipo e assim ela será tipada

// -------------------------------------------------------------------------

// Tipagens de Arrays

let numbers: number[]
// acima temos um array de números e não aceita strings
numbers = [1, 2, 3, 4, 5]

let letters: string[]
letters = ['a', 'b', 'c', 'd', 'e']
// acima temos um array de strings e não aceita números

let phoneNumber: Array<number>
phoneNumber = [859900, 859911]

let users: Array<string>
users = ['Marcelo', 'Duda']

// -------------------------------------------------------------------------

// Tipagens de Funções

function showMessages(message: string): void {
  console.log(message)
  // se dermos um return message teremos um erro
  // sem o void e sem return temos inferência de tipo para void
}
// função sem retorno leva tipa void, com o void tipado não conseguimos fazer return

console.log(showMessages('marcelo'))

function showNumber(num: number): number {
  // inferência explicita para number
  // o que fica fora () classifica o tipo do retorno da função
  return num
}

console.log(showNumber(2))

// -------------------------------------------------------------------------

// OPERADOR UNION, onde uma variável pode aceitar mais de um tipo, usamos o pipe | para separar o tipos

function printUserId(id: number | string | null) {
  console.log(`O ID DO USUÁRIO E: ${id}`);

}

printUserId(101)

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

function useState<T extends number | string = string>() {
  // = string, caso não seja definido o tipo ele será string
  let state: T
  function set(newValue: T) {
    state = newValue
  }
  function get() {
    return state
  }
  return { get, set }
}

let newStateNumber = useState<number>()
newStateNumber.set(123)
newStateNumber.get()

let newStateString = useState<string>()
newStateString.set('marcelo')
newStateString.get()

let newState = useState()
newState.set('marcelo')
newState.get()

// -------------------------------------------------------------------------

// Usando o type
// Por convenção tipos são criados com Letra Maiúsculas

type IdType = string | number | undefined | boolean

let userId: IdType
let adminId: IdType

userId = 1
adminId = 'marcelo'
userId = undefined
adminId = true

// -------------------------------------------------------------------------

// usando asserção de tipos ou Type Assertions

type UserResponse = {
  id: number
  userName: string
  avatar: string
}

let userResponse = {
  id: 123,
  userName: 'marcelo',
  avatar: 'logo'
} as UserResponse

userResponse.id
userResponse.userName
userResponse.avatar

// -------------------------------------------------------------------------

// Usando Type Objetos

type Point = {
  x: number | null | undefined
  y: number
}

function printCoord(point: Point) {
  console.log(`The coordinates x value is ${point.x ?? 0}`)
  console.log("The coordinates y value is " + point.y)
}

printCoord({ x: undefined, y: 100 })

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// -------------------------------------------------------------------------

// Usando o OPCIONAL >>> ?

type UserType = {
  userName: string
  email: string
  age: number
  isAdmin?: boolean
  // a ? indica que o tipo é opcional
}

function printUser(userType: UserType) {
  console.log(`User ${userType.userName}`);
  console.log(`User ${userType.age}`);
}

printUser({ userName: 'marcelo', email: 'mail', age: 18 })

type UserType2 = {
  userName: string
  email: string
  age: number
  isAdmin?: boolean
  // a ? indica que o tipo é opcional
}

let newUser: UserType2 = {
  userName: 'marcelo',
  email: 'marcelo@com.br',
  age: 18
}

// -------------------------------------------------------------------------

// Usando a Intersecção de Tipos

type User3 = {
  id: number
  name: string
}

type Char3 = {
  nickname: string
  level: number
}

let infoUser3: User3
// ou let infoUser3: Char3, mas podemos juntar os 2 tipos

type PlayerInfo3 = User3 & Char3

let infoGeral3: PlayerInfo3 = {
  id: 1,
  name: 'marcelo',
  nickname: 'jack',
  level: 2
}

// -------------------------------------------------------------------------

// Usando Interface (outra forma de criar e declarar tipos)

interface User55 {
  id: number
  name?: string
}

let newUser55: User55 = {
  id: 2,
}

interface User555 {
  id: number
  nick?: string
}

function registerNewUser555(user555: User555) {
  console.log(`Id do User555 é ${user555.id}`);
}

registerNewUser555({ id: 1 })

// -------------------------------------------------------------------------

// Type e Interface os dois tem o mesmo objetivo: criar tipagem
// o Type é mais simples e flexível, e cuida de tipos primitivos
// a Interface são úteis para Programação Orientada a Objetos

type TUser = {
  id: number
  nick: string
}

type TPayment = {
  method: string
}

type Client = TUser & TPayment

interface IUser {
  id: number
  nick: string
}

interface IPayment {
  method: string
}

interface Client2 extends IUser, IPayment { }
