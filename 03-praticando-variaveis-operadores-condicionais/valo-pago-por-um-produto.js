/* 
    elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha das condições de pagamento.
    utilize os códigos da tabela a seguir oara ler qual a condição de pagamento escolhida e efetuar o calculo adequado

    código condiçãp de pagamento:
    - a vista débito, recebe 10% de desconto;
    - a vista dinheiro ou pix, recebe 15% de desconto;
    - em duas vezes, preço normal de etiqueta sem jutos;
    - acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valor = 100;
const condicaoDePagamento = 4;

if (condicaoDePagamento == 1){
    console.log(valor - (valor/100*10));
} else if (condicaoDePagamento == 2){
    console.log(valor - (valor/100*15));
} else if (condicaoDePagamento == 3){
    console.log(valor);
} else {
    console.log(valor + (valor/100 * 10));
}