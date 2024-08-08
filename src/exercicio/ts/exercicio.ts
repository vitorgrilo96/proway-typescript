//exercicio 1
function exercicio1(): void {
    let nome: string = "Arthur Macedo";
    let cnpj: string = "28.426.361/0001-13";
    let inscricao: string = "765.160.597.955";
    let razao: string = "Bryan e Samuel Gráfica ME";
    let categoria: string = "Gráfica";
    let falida: boolean = false;

    falida = true;

    let estaFalidaEscrito = convertBooleanParaString2(falida);
console.log(
    `nome: ${nome}
    cnpj: ${cnpj}
    inscricao: ${inscricao}
    razao: ${razao}
    categoria: ${categoria}
    falida: ${(estaFalidaEscrito)}`);
}

function convertBooleanParaString2(valor: boolean): string {
    if (valor) {
        return "sim";
    }
    return "não";
}

exercicio1();



//exercicio 2
let local = {
    nome: "vila germanica",
    preco: "entrada gratuita",
    estado: "santa catarina",
    cidade: "blumenau",
    bairro: "vila germanica",
    logradouro: "Rua Alberto Stein",
    numero: 666,
    complemento: "perto do parque"
}

console.log(`nome: ${local.nome}`)
console.log(`preco: ${local.preco}`)
console.log(`estado: ${local.estado}`)
console.log(`cidade: ${local.cidade}`)
console.log(`bairro: ${local.bairro}`)
console.log(`logradouro: ${local.logradouro}`)
console.log(`numero: ${local.numero}`)
console.log(`complemento: ${local.complemento}`)



//exercicio 3
class Usuario {
    nome: string
    email: string
    telefone: string
    whattsapp: string
    instagram: string
    linkedin: string
    senha: string
    categoria: string

    constructor(nome: string, email: string, telefone: string, whattsapp: string, instagram: string, linkedin: string, senha: string, categoria: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.whattsapp = whattsapp;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.senha = senha;
        this.categoria = categoria;
    }
}

let vitor: Usuario = new Usuario("vitor", "viedfjffhf@gmail.com", "(65)84444432", "(65)84444432", "instagram", "emgregado", "gry422ff", "financeiro");

console.log(vitor);



//extra
class Pais {
    nome: string;
    capital: string;
    continente: string;
}

const polonia = new Pais();
polonia.nome = "polônia";
polonia.capital = "varsóvia";
polonia.continente = "europa";

console.log(polonia)