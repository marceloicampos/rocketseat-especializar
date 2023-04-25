function imprimirDado(dado) {
    console.log('Primeiro execute a primeira Tarefa, e depois faça um callBack de uma outra tarefa')
    console.log('a')
    console.log('b')
    console.log('c')
    console.log(dado())
    // o último console log contém uma callback, ou seja, chame de volta a função passada como argumento "dado" e execute após executar as tarefas anteriores
}

imprimirDado(() => {
    return `Número Aleatório: ${(Math.random() * 10).toFixed(0)}`
})
