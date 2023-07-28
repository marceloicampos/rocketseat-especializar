const queryDiv = document.querySelector('.curso')
console.log(queryDiv)

const queryAllDivTodas = document.querySelectorAll('.curso, p')
console.log(queryAllDivTodas)

const queryAllDivArray = [...document.querySelectorAll('.curso, p')]
console.log(queryAllDivArray)

const queryAllDivClass = [...document.querySelectorAll('div[class]')]
console.log(queryAllDivClass)

const queryAllDivP = [...document.querySelectorAll('div>p')][0]
console.log(queryAllDivP)
