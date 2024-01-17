function teste(){
    console.log('teste');
}
teste();


function sayMayName(name){
    console.log(name);
}
sayMayName('André');
sayMayName('Thomas');


function quadrado(valor){
    return valor * valor;
}
const resultado = quadrado(10);
console.log(resultado);


function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(200, 10));