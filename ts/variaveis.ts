/* metodo exemplo01 é um metodo sem retorno (void) */
function exemplo01(): void {
    let nomeUsuario: string = "bruce wayne";
    let apelido: string = "batman";
    let idade: number = 24;
    let patrimonio: number = 0;
    let estaEmpregado: boolean = false;
    let filhoMarta: boolean = true;

    // atualizando o estado dew empregado do bruce
    estaEmpregado = true;

    let estaEmpregadoTexto = convertBooleanParaString(estaEmpregado);

    let titulo = document.querySelector("h1");
    titulo.innerText = nomeUsuario

    let paragrafo = document.querySelector("p");
    paragrafo.innerText = `
apelido: ${apelido}
idade: ${idade}
patrimonio: ${patrimonio}
empregado: ${estaEmpregadoTexto}
filho marta: ${convertBooleanParaString(filhoMarta)}`;
}

function convertBooleanParaString(valor: boolean): string {
    if (valor) {
        return "sim";
    }
    return "não";
}

exemplo01();

// function convertBooleanParaString(valor: boolean): string {
//     let retorno: string;
//     // if (valor === true) {
//     if (valor) {
//         retorno = "Sim";
//     } else {
//         retorno = "Não";
//     }
//     return retorno;
// }

// function convertBooleanParaString(valor: boolean): string {
//     if (valor) 
//         return "Sim";
//     return "Não";
// }
// function convertBooleanParaString(valor: boolean): string {
//     // Operador ternário
//     // return if ? código do if : código do else
//     return valor ? "Sim"  : "Não";
// }
