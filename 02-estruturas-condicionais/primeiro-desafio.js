/**
 * faça um programa para calcular o valor de uma viagem
 * 
 * voce terá 5 variaveis. Sendo elas:
 * 1 - preço etanol
 * 2 - preço gasolina
 * 3 - tipo de combustivel que esta no seu carro
 * 4 - gasto medio de combustivel do carro por km
 * 5 - distancia em km da viagem
 * 
 * imprima no console o valor que sera gasto de combustivel para realizar esta viagem
 */

const precoEtanol = 4.79;
const precoGasolina = 6.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const listosConsumidos = distanciaEmKm / kmPorLitro;


if (tipoCombustivel === 'Etanol'){
    const valorGasto = listosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else{
    const valorGasto = listosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}