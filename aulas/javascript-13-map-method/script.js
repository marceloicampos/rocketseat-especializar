const cursos = ['HTML', 'CSS', 'Java', 'PHP', 'React']

cursos.map((element, index, array) => {
    console.log('Curso: ' + element + ' | Posição do Curso: ' + index + ' | Lista de Todos os Cursos: ' + array)
})

console.log('1-------------')

let c = cursos.map((el, i) => {
    return '<div>' + el + ' ' + i + '</div>'
})

console.log(c)

console.log('2-------------')

let el = document.getElementsByTagName('div')

el = [...el]

console.log(el)

el.map((el, i) => {
    console.log(el.innerHTML + ' ' + i)
})

console.log('---');

el.map((el, i) => {
    el.innerHTML = 'Cursos ' + i
    console.log(el.innerHTML);
})

console.log('3-------------')

const elementos = document.getElementsByTagName('div')
const val = Array.prototype.map.call(elementos, ({ innerHTML }) => innerHTML)
console.log(val)

console.log('4-------------')

const converterInt = e => parseInt(e)
const dobro = e => e * 2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
let dob = ['1', '2', '3', '4', '5'].map(dobro)
console.log(num)
console.log(dob)
