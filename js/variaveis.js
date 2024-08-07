function exemplo01() {
    var nomeUsuario = "bruce wayne";
    var apelido = "batman";
    var idade = 24;
    var patrimonio = 0;
    var estaEmpregado = false;
    var filhoMarta = true;
    estaEmpregado = true;
    var estaEmpregadoTexto = convertBooleanParaString(estaEmpregado);
    var titulo = document.querySelector("h1");
    titulo.innerText = nomeUsuario;
    var paragrafo = document.querySelector("p");
    paragrafo.innerText = "\napelido: ".concat(apelido, "\nidade: ").concat(idade, "\npatrimonio: ").concat(patrimonio, "\nempregado: ").concat(estaEmpregadoTexto, "\nfilho marta: ").concat(convertBooleanParaString(filhoMarta));
}
function convertBooleanParaString(valor) {
    if (valor) {
        return "sim";
    }
    return "não";
}
exemplo01();
