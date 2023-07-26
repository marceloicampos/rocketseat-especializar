let pessoa = {
    nome: 'Marcelo',
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome}.`)
    }
}

pessoa.apresentar()

console.log('---')

let pessoa2 = {
    nome2: 'Caio'
}

const apresentar2 = () => {
    console.log(`Olá, meu nome é ${pessoa2.nome2}.`)
}

apresentar2()

// Em resumo, o "this" é uma palavra-chave importante em JavaScript que se refere ao objeto em um determinado contexto ou escopo

console.log('---')

this.name = 'Marcelo'
console.log(this.name)

console.log('---')

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota
    console.log(nome + ' ' + nota)
}

aluno('marcelo', 100)

console.log('---')

function aluno2(nome2, nota2) {
    this.nome2 = nome2
    this.nota2 = nota2
    this.dados = function () {
        setTimeout(function () {
            this.nome2 = 'x'
            this.nota2 = 2
            console.log(this.nome2)
            console.log(this.nota2)
        }, 2000)
    }
}

const aluno22 = new aluno2('marcelo2', 102)
aluno22.dados()

console.log('---')

function aluno3(nome3, nota3) {
    this.nome3 = nome3
    this.nota3 = nota3
    this.dadosArrow = () => {
        setTimeout(() => {
            console.log(this.nome3)
            console.log(this.nota3)
        }, 3000)
    }
}

const aluno33 = new aluno3('marcelo3', 103)
aluno33.dadosArrow()

console.log('antes do fim')
