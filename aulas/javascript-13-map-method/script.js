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

let htmlElement = document.getElementsByTagName('div')
console.log(htmlElement)

arrayElement = [...htmlElement]
console.log(arrayElement)

arrayElement.map((el, i) => {
    console.log(el.innerHTML + ' ' + i + ' inner')
})

console.log('---')

arrayElement.map((el, i) => {
    el.innerHTML = 'Cursos ' + i
    console.log(el.innerHTML)
})

console.log('3-------------')

const elementos = document.getElementsByTagName('div')
const val = Array.prototype.map.call(elementos, ({ innerHTML }) => innerHTML)
console.log(val)

console.log('4-------------')

const mapping = e => e
const converterInt = e => parseInt(e)
const dobro = e => e * 2
let map1 = [1, 2, 3, 4, 5, 6, 7].map(e => e)
let map2 = [1, 2, 3, 4, 5, 6].map(mapping)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
let dob = ['1', '2', '3', '4', '5'].map(dobro)
console.log(map1 + ' map1')
console.log(map2 + ' map2')
console.log(num)
console.log(dob)

console.log('5-------------')

const num2 = ['1', '2', '3', '4', '5']
num2.map(e => {
    console.log(parseInt(e))
})

console.log('---')

const dob2 = ['1', '2', '3', '4', '5']
dob2.map(e => {
    console.log(e * 2)
})
