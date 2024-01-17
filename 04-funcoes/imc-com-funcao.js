function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ("Abaixo do Peso");
    } else if (imc >= 18.5 && imc < 25) {
        return ("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        return ("Obeso");
    } else {
        return ("Obesidade grave");
    }
}

function main() {
    const peso = 200;
    const altura = 1.71;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();