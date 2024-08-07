let cliente = {
    nome: "maria",
    idade: 28,
    cargo: "youtuber",
    videos: [
        "fiquei preso 24 horas não sei aonde e olha no que deu",
        "fiz slime gigante uaaaaaaaaaaaau",
        "pegadinha do palhaço assassino"
    ]
}

console.log(`nome: ${cliente.nome}`)
console.log(`idade: ${cliente.idade}`)
console.log(`cargo: ${cliente.cargo}`)

console.log("videos: ")
for (let index = 0; index < cliente.videos.length; index++) {
    const video = cliente.videos[index];
    console.log(`\t${video}`)
}