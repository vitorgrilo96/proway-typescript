var cliente = {
    nome: "maria",
    idade: 28,
    cargo: "youtuber",
    videos: [
        "fiquei preso 24 horas não sei aonde e olha no que deu",
        "fiz slime gigante uaaaaaaaaaaaau",
        "pegadinha do palhaço assassino"
    ]
};
console.log("nome: ".concat(cliente.nome));
console.log("idade: ".concat(cliente.idade));
console.log("cargo: ".concat(cliente.cargo));
console.log("videos: ");
for (var index = 0; index < cliente.videos.length; index++) {
    var video = cliente.videos[index];
    console.log("\t".concat(video));
}
