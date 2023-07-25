const cursos = [
    'HTML', 'CSS', 'Java', 'PHP', 'React'
]

cursos.map((element, index, array)=> {
    console.log('Curso: ' + element + ' | Posição do Curso: ' + index + ' | Lista de Todos os Cursos: ' + array);
})

console.log('---')

let c = cursos.map((el, i) => {
    return '<div>' + el + '</div>'
})

console.log(c)

console.log('---')

let el = document.getElementsByTagName('div')

el = [...el]

console.log(el)

el.map((el)=> {
    el.innerHTML = 'Cursos'
    console.log(el.innerHTML)
})

console.log('---')

const elementos = document.getElementsByTagName('div')
const val = Array.prototype.map.call(elementos, ({innerHTML})=> innerHTML)
console.log(val);

console.log('---')

const converterInt = (e) => parseInt(e)
const dobro = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
let dob = ['1', '2', '3', '4', '5'].map(dobro)
console.log(num);
console.log(dob);
