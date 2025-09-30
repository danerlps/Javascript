function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
}

function calcularIdade(anoNascimento, anoAtual) {
    if (anoNascimento > anoAtual) {
        throw new Error('Ano de nascimento não pode ser maior que o ano atual.');
    }
    return anoAtual - anoNascimento;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    calcularIdade
};