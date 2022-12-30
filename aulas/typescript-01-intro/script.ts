function showTicket0(userName: string | null, ticket: number) {
  console.log(`Olá ${userName ?? 'Usuário Padrão'}, seu ticket é: ${ticket}`)
}

showTicket0(null, 4321)

// -------------------------------------------------------------------------

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

let infoNameUser: string = 'marcelo'
// acima temos uma declaração explicita
let infoUser = 'marcelo'
infoUser = 'campos'
// acima temos um declaração implícita
// então temos exemplo de inferência de tipo, pois a declaração recebe um tipo e assim ela será tipada

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

type Point = {
  x: number | null | undefined
  y: number
}

function printCoord(pt: Point) {
  console.log(`The coordinates x value is ${pt.x ?? 0}`)
  console.log("The coordinates y value is " + pt.y)
}

printCoord({ x: undefined, y: 100 })

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
