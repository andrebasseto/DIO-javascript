/*
    O IMC - Indice de massa corporal é um critério da Organização Mundial da Saude, para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula IMC
    IMC = peso / (altura * altura)

    IMC em adulto Condição:
    - abaixo de 18.5 abaixo do peso;
    - entre 18.5 e 25 peso normal;
    - entre 25 e 30 acima do peso;
    - entre 30 e 40 obeso;
    - Acima 40 Obesidade Grave;
*/

const peso = 200;
const altura = 1.71;
//const imc = peso / (altura * altura);
const imc = peso / (Math.pow(altura, 2));

console.log(imc);
if (imc < 18.5){
    console.log("Abaixo do Peso");
} else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30){
    console.log("Acima do peso");
} else if(imc >= 30 && imc < 40){
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}