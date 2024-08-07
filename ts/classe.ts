class filme{
    nome: string;
    categoria: string;
    duracao: number;
    atores: array<string>;
}

const starWars = new filme();
starWars.nome = "star wars";
starWars.categoria = "drama";
starWars.duracao = 130;
starWars.atores = [
    "carrie fisher",
    "harisson ford"
]

console.log(starWars)