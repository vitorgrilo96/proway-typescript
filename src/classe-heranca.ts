class Animal{
    public nome: string;

    constructor (nome: string){
        this.nome = nome;
    }

    public mover(distanciaEmMetros: number){
        console.log(`${this.nome} moveu-se ${distanciaEmMetros} metros.`);
    }
}

// cachorro é uma subclasse que herda animal
class cachorro extends Animal{
    public apelido: string;

    constructor(nome: string, apelido: string){
        super(nome); // passar os parâmetros do construtor pai, para a classe pai
        this.apelido = apelido;
    }
}

class gato extends Animal{
    public quantidadeVidas: number;

    constructor(){
        super("gato");
    }
}

const galinha = new Animal("galinha");
galinha.mover(10);

const doguinho = new cachorro("dog", "doguinho");
console.log(`cachorro: ${doguinho.nome}`);
console.log(`cachorro apelido: ${doguinho.apelido}`);

const tobias = new gato();
tobias.quantidadeVidas = 10;

console.log(`gato: ${tobias.nome}`);
console.log(`gato quantidade vidas: ${tobias.quantidadeVidas}`);