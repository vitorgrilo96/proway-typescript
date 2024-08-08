class Filme{
    nome: string;
    categoria: string;
    duracao: number;
    atores: Array<string>;
}

const starWars = new Filme();
starWars.nome = "star wars";
starWars.categoria = "drama";
starWars.duracao = 130;
starWars.atores = [
    "carrie fisher",
    "harisson ford"
]

console.log(starWars)