const valor = 100;
const condicaoDePagamento = 4;

if (condicaoDePagamento == 1){
    console.log(aplicarDesconto(valor, 10));
} else if (condicaoDePagamento == 2){
    console.log(aplicarDesconto(valor, 15));
} else if (condicaoDePagamento == 3){
    console.log(aplicarDesconto(valor, 0));
} else {
    console.log(aplicarJuros(valor, 10));
}

function aplicarDesconto(valor, desconto){
    return (valor - (valor / 100 * desconto));
}

function aplicarJuros(valor, juros){
    return (valor + (valor / 100 * juros));
}