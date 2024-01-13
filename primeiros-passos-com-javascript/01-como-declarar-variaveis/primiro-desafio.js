/**
 * faça um programa para calcular o valor de uma viagem
 * 
 * voce terá 3 variaveis. Sendo elas:
 * 1 - preço do combustivel
 * 2 - gasto medio de combustivel do carro por km
 * 3 distancia em km da viagem
 * 
 * imprima no console o valor que sera gasto de combustivel para realizar esta viagem
 */

const precoCombustivel = 5.99;
const kmPorLitro = 13;
const distanciakm = 150;

const litrosConsumidos = distanciakm / kmPorLitro;
const gastoViagem = litrosConsumidos * precoCombustivel;

console.log(gastoViagem.toFixed(2));