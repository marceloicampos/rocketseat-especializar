"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFB', 'Typescript');
console.log(c1.canal);
console.log(c1.curso);
// npx tsc aula03.ts --target 'ES2016'
// npx tsc aula03.ts --target 'ESNEXT'
// ESNEXT usa a última versão do Javascript
// npx tsc --init
// -- init inicia a criação do tsconfig
