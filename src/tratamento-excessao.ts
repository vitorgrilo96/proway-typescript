function dividir(numero1: number, numero2: number) {
    if (numero2 === 0 ) {
        throw Error("numero 2 não pode ser 0");
    }
    return numero1 / numero2;
}

function exemploTratamentoExcessao01() {
    try {
        console.log(dividir(32, 0));
        console.log("deu boa");
    } catch (error) {
        console.log(error);
    }

    console.log("acabou a execução");
}

function calcularImc(peso: number, altura: number): number {
    if (peso <= 0) {
        throw Error("o peso não pode ser menor que zero.");
    }

    if (peso >= 400) {
        throw Error("o peso não pode ser maior que 400.");
    }

    if (peso <= 2.60) {
        throw Error("a altura não pode ser menor ou igual que zero.");
    }

    let imc = peso / (altura * altura);
    return imc;
}

try {
    console.log(calcularImc(570, 1.66));
} catch (error) {
    console.log(error.message);
}
console.log("obrigado");