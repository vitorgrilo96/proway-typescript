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



class AnoNascimentoAbaixoDoMinimoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "AnoNascimentoAbaixoDoMinimoError";
    }
}

class AnoNascimentoAcimaDoMaximoError extends Error {
    constructor(ano_maximo: number) {
        super(`ano nascimento inválido! valor deve ser abaixo de ${ano_maximo}`);
        this.name = "AnoNascimentoAcimaDoMaximoError";
    }
}

function calcularIdade(anoNascimento: number): number {
    if (anoNascimento < 1900) {
        throw new AnoNascimentoAbaixoDoMinimoError("ano nascimento invalido! valor deve ser acima de 1899");
    }

    let dataAtual: Date = new Date();
    let anoAtual: number = dataAtual.getFullYear();

    if (anoNascimento > anoAtual) {
        throw new AnoNascimentoAcimaDoMaximoError(anoAtual + 1);
    }

    let idade = anoAtual - anoNascimento;
    return idade;
}

try {
    let idade = calcularIdade(2010);
    console.log(`idade: ${idade}`);
} catch (error) {
    if (error instanceof AnoNascimentoAbaixoDoMinimoError || error instanceof AnoNascimentoAcimaDoMaximoError) {
        console.log("erro no campo de ano de nascimento: ");
        console.log(error.message);
        console.log(error.name);
        console.log(error.stack);
    } else {
        console.log(error.message);
    }
}