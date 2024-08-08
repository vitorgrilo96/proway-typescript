class aluno {
    // propriedades
    nome: string
    nota1: number
    nota2: number
    nota3: number

    // constructor: tem como objetivo construir o objeto da forma correta, ou seja, preencher as propriedades necessarias para o correto funcionamento
    constructor(nome: string, nota1: number, nota2: number, nota3: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    // metodo com retorno do tipo number,
    calcularMedia(): number {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
}

// instanciando um objeto chamado victor da classe aluno
let victor: aluno = new aluno("victor", 0, 1.5, 10);
victor.nota2 = 0;
victor.nota3 = 0;
let mediaVictor = victor.calcularMedia();

let pedro: aluno = new aluno("pedro", 5, 4, 10);

console.log(victor);
console.log(mediaVictor);
console.log(pedro);
console.log(pedro.calcularMedia());