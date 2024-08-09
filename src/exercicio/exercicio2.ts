function calcularIdade(nascimento: number): number {
    if (nascimento <= 1900) {
        throw Error("essa data não faz sentido");
    }

    let idade = 2024 - nascimento;

    return idade;
}

try {
    console.log(calcularIdade(2006));
} catch (error) {
    console.log(error.message);
}
console.log("esta é sua idade");



function calcularSalario(Hora: Number, Horas: Number): number {
    if (Hora <= 0) {
        throw Error("seu salário por hora não pode ser menor ou igual a 0 (eu espero)")
    }

    if (Hora >= 350) {
        throw Error("seu salário não pode ser maior que 350 (infelizmente)")
    }

    if (Horas <= 0) {
        throw Error("suas horas trabalhadas devem ser maior que 0 caso contrario voce desempregado")
    }

    if (Horas >= 440) {
        throw Error("suas horas trabalhadas devem ser menores que 440 horas")
    }

    let Salario = Horas * Hora;
    return Salario
}

try {
    console.log(calcularSalario(14, 300));
} catch (error) {
    console.log(error.message);
}
console.log("este é o seu salário")