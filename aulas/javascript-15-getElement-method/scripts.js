const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)

dc1.innerHTML = 'Curso'

console.log(dc1)

const arrayElements = [dc1, dc2, dc3, dc4, dc5, dc6]

console.log(arrayElements)

for (dc of arrayElements) {
    dc.innerHTML = 'x'
}

arrayElements.map(element => {
    element.innerHTML = 'y'
})

console.log('---------------')

const tagName = document.getElementsByTagName('div')
console.log(tagName)
// retorna um HTML Collection de 6 itens

let tagNameCollectionArray = document.getElementsByTagName('div')
tagNameCollectionArray = [...tagNameCollectionArray]
console.log(tagNameCollectionArray)

const tagNameArray = [...document.getElementsByTagName('div')]
console.log(tagNameArray)
// com Spread Operation retorna um Array de 6 itens

console.log('---------------')

const tagCurso = [...document.getElementsByClassName(' curso')]
const tagClassName1 = [...document.getElementsByClassName(' divTag1')]
const tagClassName2 = [...document.getElementsByClassName(' divTag2')]
const tagCurso5 = [...document.getElementsByClassName(' curso')][5]
console.log(tagCurso)
console.log(tagClassName1)
console.log(tagClassName2)
console.log(tagCurso5)

tagClassName1.map(e => {
    e.classList.add('destaque')
})
